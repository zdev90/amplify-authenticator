import AWS from "aws-sdk";
import qs from "querystring";
import { object, string } from "yup";

import { decryptToken, base64URLEncode, sha256 } from "../../utils/encrypt";

import { cognitoSP } from "../../utils/cognitoServiceProvider";

var docClient = new AWS.DynamoDB.DocumentClient();

const validationSchema = object({
  client_id: string()
    .required()
    .matches(/^[a-zA-Z0-9]*$/),
  grant_type: string()
    .required()
    .matches(/(authorization_code|refresh_token)/),
  code: string().when("grant_type", {
    is: "authorization_code",
    then: (schema) => schema.required().matches(/^[a-zA-Z0-9-]*$/),
  }),
  redirect_uri: string().when("grant_type", {
    is: "authorization_code",
    then: (schema) =>
      schema
        .required()
        .matches(
          /^((?:http:\/\/)|(?:https:\/\/))(www.)?((?:[a-zA-Z0-9_-]+\.[a-z]{3})|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)|(localhost(?::\d+)?))([\/a-zA-Z0-9\.]*)$/
        ),
  }),
  code_verifier: string().when("grant_type", {
    is: "authorization_code",
    then: (schema) => schema.required().matches(/^[a-zA-Z0-9]*$/),
  }),
  refresh_token: string().when("grant_type", {
    is: "refresh_token",
    then: (schema) => schema.required().matches(/^[a-zA-Z0-9_.-]*$/),
  }),
});

export const handler = async (event, context) => {
  if (!(event && event.body)) {
    return {
      statusCode: 400,
      body: JSON.stringify("Required parameters are missing"),
    };
  }

  var buff = Buffer.from(event.body, "base64");
  var eventBodyStr = buff.toString("UTF-8");
  var jsonBody = qs.parse(eventBodyStr);

  if (!validationSchema.isValidSync(jsonBody)) {
    // Log validation errors
    try {
      validationSchema.validateSync(jsonBody);
    } catch (error) {
      console.error(error);
    }

    return {
      statusCode: 400,
      body: JSON.stringify(
        "Required parameters are missing or have invalid format"
      ),
    };
  }

  var grant_type = jsonBody.grant_type;
  var client_id = jsonBody.client_id;

  if (grant_type === "authorization_code") {
    var authorization_code = jsonBody.code;
    var redirect_uri = jsonBody.redirect_uri;
    var code_verifier = jsonBody.code_verifier;
    if (
      redirect_uri === undefined ||
      authorization_code === undefined ||
      code_verifier == undefined
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify("Required parameters are missing"),
      };
    }

    var data;
    var params = {
      TableName: process.env.CODES_TABLE_NAME,
      Key: {
        authorization_code: authorization_code,
      },
    };
    try {
      data = await docClient.get(params).promise();
    } catch (error) {
      console.error(error);
    }

    if (data.Item === undefined) {
      return {
        statusCode: 400,
        body: JSON.stringify("Invalid authorization code"),
      };
    }
    if (data.Item.client_id != client_id) {
      return {
        statusCode: 400,
        body: JSON.stringify("Client ID does not match authorization code"),
      };
    }
    if (data.Item.redirect_uri != redirect_uri) {
      return {
        statusCode: 400,
        body: JSON.stringify("Redirect uri does not match authorization code"),
      };
    }
    if (Date.now() > data.Item.code_expiry) {
      return {
        statusCode: 400,
        body: JSON.stringify("Authorization code expired"),
      };
    }

    var calculatedCodeChallenge = base64URLEncode(sha256(code_verifier));

    if (calculatedCodeChallenge !== data.Item.code_challenge) {
      return {
        statusCode: 400,
        body: JSON.stringify("Code verifier does not match code challenge"),
      };
    }

    var access_token = data.Item.access_token;
    var id_token = data.Item.id_token;
    var refresh_token = data.Item.refresh_token;

    if (
      access_token === undefined ||
      id_token === undefined ||
      refresh_token === undefined
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify("Could not find tokens"),
      };
    }
    try {
      // Decrypt the tokens
      var access_token_clear_text = await decryptToken(access_token);
      var id_token_clear_text = await decryptToken(id_token);
      var refresh_token_clear_text = await decryptToken(refresh_token);
    } catch (err) {
      console.error("Decrypt error:", err);
      return {
        statusCode: 400,
        body: JSON.stringify("Could not decrypt tokens"),
      };
    }

    // Record will be deleted by TTL.
    // Delete the record in DynamoDB: codes are valid only once
    // try {
    //   await docClient.delete(params).promise();
    // } catch (error) {
    //   console.error("Token deletion error", error); // This error doesn't need to be propagated to the user
    // }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      body: JSON.stringify({
        access_token: access_token_clear_text,
        id_token: id_token_clear_text,
        refresh_token: refresh_token_clear_text,
        token_type: "Bearer",
      }),
    };
  } else if (grant_type === "refresh_token") {
    var refresh_token = jsonBody.refresh_token;
    if (refresh_token === undefined) {
      return {
        statusCode: 400,
        body: JSON.stringify("refresh_token is missing"),
      };
    }

    var params = {
      AuthFlow: "REFRESH_TOKEN",
      ClientId: appClientID,
      AuthParameters: {
        REFRESH_TOKEN: refresh_token,
      },
    };

    var cognitoResponse = await cognitoSP.initiateAuth(params).promise(); // Call Cognito with refresh token to get refreshed id and access tokens
    var access_token = cognitoResponse.AuthenticationResult.AccessToken;
    var id_token = cognitoResponse.AuthenticationResult.IdToken;

    if (access_token === undefined || id_token === undefined) {
      return {
        statusCode: 400,
        body: JSON.stringify("Could not refresh tokens"),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      body: JSON.stringify({
        access_token: access_token,
        id_token: id_token,
        token_type: "Bearer",
      }),
    };
  } else {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      body: JSON.stringify("Invalid grant type"),
    };
  }
};
