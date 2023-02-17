import AWS from "aws-sdk";
import { encryptToken } from "../../utils/encrypt";

var docClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event, context) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify("Empty body"),
    };
  }

  var jsonBody = JSON.parse(event.body);
  var authorization_code = jsonBody.authorization_code;
  var id_token = jsonBody.id_token;
  var access_token = jsonBody.access_token;
  var refresh_token = jsonBody.refresh_token;

  if (
    authorization_code === undefined ||
    id_token === undefined ||
    access_token === undefined ||
    refresh_token === undefined
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify("Body missing values"),
    };
  }

  var encrypted_id_token = await encryptToken(id_token);
  var encrypted_access_token = await encryptToken(access_token);
  var encrypted_refresh_token = await encryptToken(refresh_token);

  var params = {
    TableName: process.env.CODES_TABLE_NAME,
    Key: {
      authorization_code: authorization_code,
    },
    UpdateExpression:
      "SET id_token = :idt, access_token = :at, refresh_token = :rt",
    ConditionExpression: "attribute_exists(authorization_code)",
    ExpressionAttributeValues: {
      ":idt": encrypted_id_token,
      ":at": encrypted_access_token,
      ":rt": encrypted_refresh_token,
    },
  };

  try {
    await docClient.update(params).promise();
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify("Invalid authorization_code"),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify("Inserted tokens into storage"),
  };
};
