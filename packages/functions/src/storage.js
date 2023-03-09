import AWS from "aws-sdk";
import { object, string } from "yup";

import { encryptToken } from "../../utils/encrypt";

var docClient = new AWS.DynamoDB.DocumentClient();

const validationSchema = object({
  authorization_code: string()
    .required()
    .matches(/^[a-zA-Z0-9-]*$/),
  id_token: string()
    .required()
    .matches(/^[a-zA-Z0-9_.-]*$/),
  refresh_token: string()
    .required()
    .matches(/^[a-zA-Z0-9_.-]*$/),
  access_token: string()
    .required()
    .matches(/^[a-zA-Z0-9_.-]*$/),
});

export const handler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify("Empty body"),
    };
  }

  const jsonBody = JSON.parse(event.body);

  if (!validationSchema.isValidSync(jsonBody)) {
    // Log validation errors
    try {
      validationSchema.validateSync(jsonBody);
    } catch (error) {
      console.error(error);
    }

    return {
      statusCode: 400,
      body: JSON.stringify("Body missing values or has invalid format"),
    };
  }

  const { authorization_code, id_token, access_token, refresh_token } =
    jsonBody;

  const encrypted_id_token = await encryptToken(id_token);
  const encrypted_access_token = await encryptToken(access_token);
  const encrypted_refresh_token = await encryptToken(refresh_token);

  var params = {
    TableName: process.env.CODES_TABLE_NAME,
    Key: {
      authorization_code,
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
