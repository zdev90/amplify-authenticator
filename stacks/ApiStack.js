import { Api, use } from "sst/constructs";
import { AuthStack } from "./AuthStack";
import { CodesStack } from "./CodesStack";
import ConfigStack from "./ConfigStack";

export function ApiStack({ stack, app }) {
  const { auth } = use(AuthStack);
  const { codesTable, encryptionKey } = use(CodesStack);
  const { configBucket, configObjectKey } = use(ConfigStack);

  // Create an HTTP API
  const api = new Api(stack, "Api", {
    authorizers: {
      cognitoAuthorizer: {
        type: "user_pool",
        userPool: {
          id: auth.userPoolId,
          clientIds: [auth.userPoolClientId],
        },
      },
    },
    defaults: {
      function: {
        timeout: 120,
        environment: {
          REGION: app.region,
          USER_POOL_ID: auth.userPoolId,
          IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
          USER_POOL_CLIENT_ID: auth.userPoolClientId,
          CODES_TABLE_NAME: codesTable.tableName,
          ENCRYPTION_KEY_ID: encryptionKey.keyId,
          CONFIG_BUCKET_NAME: configBucket.bucketName,
          CONFIG_OBJECT_KEY: configObjectKey,
        },
      },
    },
    routes: {
      "GET /oauth2/authorize": "packages/functions/src/authorize.handler",
      "POST /oauth2/token": "packages/functions/src/token.handler",
      "POST /storage": "packages/functions/src/storage.handler",
      "GET /logout": "packages/functions/src/logout.handler",
      "POST /oauth2/userInfo": {
        authorizer: "cognitoAuthorizer",
        authorizationScopes: [
          "aws.cognito.signin.user.admin",
          "email",
          "openid",
          "phone",
          "profile",
        ],
        function: "packages/functions/src/userInfo.handler",
      },
    },
  });

  api.attachPermissions(["cognito-idp", codesTable, "kms:*", configBucket]);

  // Show the endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
    apiUrl: api.url,
  };
}
