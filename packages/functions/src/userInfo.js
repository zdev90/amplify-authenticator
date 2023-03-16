import AWS from "aws-sdk";

const cognito = new AWS.CognitoIdentityServiceProvider();

export const handler = async (event, context) => {
  const user = await cognito
    .adminGetUser({
      UserPoolId: process.env.USER_POOL_ID,
      Username: event?.requestContext?.authorizer?.jwt?.claims?.username,
    })
    .promise();

  const res = {};
  if (user) {
    user.UserAttributes.forEach((attr) => {
      res[
        attr.Name === "custom:ageConfirmation" ? "age_confirmation" : attr.Name
      ] = attr.Value;
    });
  }

  return res;
};
