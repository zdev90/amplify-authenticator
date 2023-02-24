import AWS from "aws-sdk";

export const cognitoSP = new AWS.CognitoIdentityServiceProvider();

export async function verifyClient(client_id, redirect_uri) {
  var data;
  var params = {
    ClientId: client_id,
    UserPoolId: process.env.USER_POOL_ID,
  };

  try {
    data = await cognitoSP.describeUserPoolClient(params).promise();
    if (data.UserPoolClient && data.UserPoolClient.CallbackURLs) {
      for (var i = 0; i < data.UserPoolClient.CallbackURLs.length; i++) {
        if (data.UserPoolClient.CallbackURLs[i] === redirect_uri) {
          // If we have a URL that match it is a success
          return true;
        }
      }
    }
  } catch (error) {
    console.error(error); // Most probable reason, the client_id doesn't exist in the Cognito user pool
  }

  return false;
}

export default {
  cognitoSP,
  verifyClient,
};
