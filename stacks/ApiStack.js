import { Api, use } from "sst/constructs";
import { AuthStack } from "./AuthStack";
import { CodesStack } from "./CodesStack";

export function ApiStack({ stack, app }) {
  const { auth } = use(AuthStack);
  const { codesTable } = use(CodesStack);

  // Create an HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        timeout: 120,
        environment: {
          REGION: app.region,
          USER_POOL_ID: auth.userPoolId,
          IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
          USER_POOL_CLIENT_ID: auth.userPoolClientId,
          CODES_TABLE_NAME: codesTable.tableName,
        },
      },
    },
    routes: {
      "POST /oauth2/authorize": "packages/functions/src/authorize.handler",
      "POST /oauth2/token": "packages/functions/src/token.handler",
      "POST /storage": "packages/functions/src/storage.handler",
    },
  });

  // Show the endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
