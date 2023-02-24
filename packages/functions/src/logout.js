import { Config } from "sst/node/config";

import { verifyClient } from "../../utils/cognitoServiceProvider";

export const handler = async (event, context) => {
  var client_id = event.queryStringParameters.client_id;
  var logout_uri = event.queryStringParameters.logout_uri;

  if (client_id === undefined || logout_uri === undefined) {
    return {
      statusCode: 400,
      body: JSON.stringify("Required parameters are missing"),
    };
  }

  var validClient = await verifyClient(client_id, logout_uri);
  if (!validClient) {
    return {
      statusCode: 400,
      body: JSON.stringify("Invalid Client"),
    };
  }

  return {
    // Redirect directly to client application passing the authorization code
    statusCode: 302,
    headers: {
      Location:
        Config.PORTAL_URL +
        "/logout?client_id=" +
        client_id +
        "&logout_uri=" +
        logout_uri,
    },
  };
};
