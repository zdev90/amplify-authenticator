import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import jwt_decode from "jwt-decode";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

import { encryptToken, urlSafeDecode } from "../../utils/encrypt";
import { verifyClient } from "../../utils/cognitoServiceProvider";

const CODE_LIFE = 600000; // How long in milliseconds the authorization code can be used to retrieve the tokens from the table (10 minutes)
const RECORD_LIFE = 900000; // How long in milliseconds the record lasts in the dynamoDB table (15 minutes)

var docClient = new AWS.DynamoDB.DocumentClient();

async function getCookiesFromHeader(headers) {
  if (
    headers === null ||
    headers === undefined ||
    headers.Cookie === undefined
  ) {
    return {};
  }

  var list = {},
    rc = headers.Cookie;

  rc &&
    rc.split(";").forEach(function (cookie) {
      var parts = cookie.split("=");
      var key = parts.shift().trim();
      var value = decodeURI(parts.join("="));
      if (key != "") {
        list[key] = value;
      }
    });

  return list;
}

async function asyncAuthenticateUser(
  cognitoUser,
  cognitoAuthenticationDetails
) {
  return new Promise(function (resolve, reject) {
    cognitoUser.initiateAuth(cognitoAuthenticationDetails, {
      onSuccess: resolve,
      onFailure: reject,
      customChallenge: resolve,
    });
  });
}

async function asyncCustomChallengeAnswer(cognitoUser, challengeResponse) {
  return new Promise(function (resolve, reject) {
    cognitoUser.sendCustomChallengeAnswer(
      challengeResponse,
      {
        onSuccess: resolve,
        onFailure: reject,
        customChallenge: reject, // We do not expect a second challenge
      },
      { name: "value" }
    ); // We could have use that field to pass information
  });
}

function insertStateIfAny(event) {
  var stateQueryString = "";

  var state = event.queryStringParameters.state;
  if (state !== undefined) {
    stateQueryString = "&state=" + state;
  }

  return stateQueryString;
}

// Confirm that auth type is login or register.
function parseAction(event) {
  // Check auth_type parameter first
  var auth_type = event.queryStringParameters.auth_type;
  if (auth_type !== undefined) {
    auth_type = auth_type.toLowerCase();
    if (auth_type === "login" || auth_type === "signin") {
      return "login";
    } else if (auth_type === "register" || auth_type === "signup") {
      return "register";
    }
  }

  // Check state
  const state = event.queryStringParameters.state;
  if (state !== undefined) {
    const states = state.split("-");
    if (states[1]) {
      const action = urlSafeDecode(states[1]);
      if (action && action.toLowerCase() === "register") {
        return "register";
      }
    }
  }

  return "login";
}

export const handler = async (event, context) => {
  if (!(event && event.queryStringParameters)) {
    return {
      statusCode: 400,
      body: JSON.stringify("Required parameters are missing"),
    };
  }

  var client_id = event.queryStringParameters.client_id;
  var redirect_uri = event.queryStringParameters.redirect_uri;
  var code_challenge = event.queryStringParameters.code_challenge;
  var code_challenge_method = event.queryStringParameters.code_challenge_method;
  var portal_url = event.queryStringParameters.portal_url;
  if (
    client_id === undefined ||
    redirect_uri === undefined ||
    code_challenge === undefined ||
    code_challenge_method === undefined
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify("Required parameters are missing"),
    };
  }

  // Verify client and redirect_uri against clients table
  var validClient = await verifyClient(client_id, redirect_uri);
  if (!validClient) {
    return {
      statusCode: 400,
      body: JSON.stringify("Invalid Client"),
    };
  }

  const authorizationCode = uuidv4();
  const currentTime = Date.now();
  const codeExpiry = currentTime + CODE_LIFE;
  const recordExpiry = Math.floor((currentTime + RECORD_LIFE) / 1000); // TTL must be in seconds
  var params = {
    TableName: process.env.CODES_TABLE_NAME,
    Item: {
      authorization_code: authorizationCode,
      code_challenge: code_challenge,
      client_id: client_id,
      redirect_uri: redirect_uri,
      code_expiry: codeExpiry,
      record_expiry: recordExpiry,
    },
  };

  var cookies = await getCookiesFromHeader(event.headers);
  var canReturnTokensDirectly =
    cookies.id_token && cookies.access_token && cookies.refresh_token
      ? true
      : false; // If there are already token cookies we can return the tokens directly

  if (canReturnTokensDirectly) {
    // We have tokens as cookie already that means a successful login previously succeeded
    // but this login has probably been done from a different client with a different client_id
    // We call the custom auth flow along with the token we have to get a new one for the current client_id
    // For this to work we need to extract the username from the cookie

    let tokenDecoded = jwt_decode(cookies.access_token);
    let tokenUsername = tokenDecoded["username"];

    var authenticationData = {
      Username: tokenUsername,
      AuthParameters: {
        Username: tokenUsername,
      },
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );
    var poolData = {
      UserPoolId: process.env.USER_POOL_ID,
      ClientId: client_id,
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
      Username: tokenUsername,
      Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.setAuthenticationFlowType("CUSTOM_AUTH");

    try {
      // Initiate the custom flow
      await asyncAuthenticateUser(cognitoUser, authenticationDetails);

      // Answer the custom challenge by providing the token
      var result = await asyncCustomChallengeAnswer(
        cognitoUser,
        cookies.access_token
      );

      var encrypted_id_token = await encryptToken(
        result.getIdToken().getJwtToken()
      );
      var encrypted_access_token = await encryptToken(
        result.getAccessToken().getJwtToken()
      );
      var encrypted_refresh_token = await encryptToken(
        result.getRefreshToken().getToken()
      );

      params.Item.id_token = encrypted_id_token;
      params.Item.access_token = encrypted_access_token;
      params.Item.refresh_token = encrypted_refresh_token;
    } catch (error) {
      console.log("Token swap fail, this may be a tentative of token stealing");
      return {
        // Redirect to login page with forced pre-logout
        statusCode: 302,
        headers: {
          Location:
            "/?client_id=" +
            client_id +
            "&redirect_uri=" +
            redirect_uri +
            "&authorization_code=" +
            authorizationCode +
            "&forceAuth=true" +
            insertStateIfAny(event),
        },
      };
    }
  }

  try {
    var result = await docClient.put(params).promise();
  } catch (error) {
    console.error(error);
  }

  if (canReturnTokensDirectly) {
    return {
      // Redirect directly to client application passing the authorization code
      statusCode: 302,
      headers: {
        Location:
          redirect_uri +
          "/?code=" +
          authorizationCode +
          insertStateIfAny(event),
      },
    };
  } else {
    return {
      // Redirect to login page
      statusCode: 302,
      headers: {
        Location:
          (process.env.PORTAL_URL || portal_url || "http://localhost:3000") +
          "/" +
          parseAction(event) +
          "?client_id=" +
          client_id +
          "&redirect_uri=" +
          redirect_uri +
          "&authorization_code=" +
          authorizationCode +
          insertStateIfAny(event),
      },
    };
  }
};
