import { object, string } from "yup";

import { verifyClient } from "../../utils/cognitoServiceProvider";
import { getConfigFromS3 } from "../../utils/config";

const validationSchema = object({
  client_id: string()
    .required()
    .matches(/^[a-zA-Z0-9]*$/),
  logout_uri: string()
    .required()
    .matches(
      /^((?:http:\/\/)|(?:https:\/\/))(www.)?((?:[a-zA-Z0-9]+\.[a-z]{3})|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)|(localhost(?::\d+)?))([\/a-zA-Z0-9\.]*)$/
    ),
});

export const handler = async (event, context) => {
  if (!(event && event.queryStringParameters)) {
    return {
      statusCode: 400,
      body: JSON.stringify("Required parameters are missing"),
    };
  }

  if (!validationSchema.isValidSync(event.queryStringParameters)) {
    // Log validation errors
    try {
      validationSchema.validateSync(event.queryStringParameters);
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

  const { client_id, logout_uri } = event.queryStringParameters;

  // Verify client_id
  const validClient = await verifyClient(client_id, logout_uri);
  if (!validClient) {
    return {
      statusCode: 400,
      body: JSON.stringify("Invalid Client"),
    };
  }

  const { PORTAL_URL } = await getConfigFromS3();

  return {
    // Redirect directly to client application passing the authorization code
    statusCode: 302,
    headers: {
      Location:
        PORTAL_URL +
        "/logout?client_id=" +
        client_id +
        "&logout_uri=" +
        logout_uri,
    },
  };
};
