import { StaticSite, use, Config } from "sst/constructs";
import { aws_s3, aws_s3_deployment } from "aws-cdk-lib";

import { AuthStack } from "./AuthStack";
import { ApiStack } from "./ApiStack";
import { ConfigStack } from "./ConfigStack";

const TEST_PORTAL_URL = "http://localhost:3000";
const TEST_CLIENT_PORTAL_URL = "http://localhost:3001";

export function PortalStack({ stack, app }) {
  const { auth } = use(AuthStack);
  const { apiUrl, api } = use(ApiStack);
  const { configBucket, configObjectKey } = use(ConfigStack);

  // Authenticator frontend app
  const portal = new StaticSite(stack, "AuthenticatorPortal", {
    path: "frontend/authenticator",
    buildCommand: "npm run build",
    buildOutput: "build",
    environment: {
      REACT_APP_API_URL: apiUrl,
      REACT_APP_REGION: app.region,
      REACT_APP_USER_POOL_ID: auth.userPoolId,
      REACT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
      REACT_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    },
  });

  const portalUrl = portal.url || TEST_PORTAL_URL;

  const uploadConfig = new aws_s3_deployment.BucketDeployment(
    stack,
    "UploadConfig",
    {
      sources: [
        aws_s3_deployment.Source.jsonData(configObjectKey, {
          PORTAL_URL: portalUrl,
        }),
      ],
      destinationBucket: configBucket.cdk.bucket,
    }
  );

  // const PORTAL_URL = new Config.Parameter(stack, "PORTAL_URL", {
  //   value: portalUrl,
  // });
  // api.bind([PORTAL_URL]);

  // Client frontend app
  const clientPortal = new StaticSite(stack, "AuthenticatorClientPortal", {
    path: "frontend/authenticator-client",
    buildCommand: "npm run build",
    buildOutput: "build",
    environment: {
      REACT_APP_REGION: app.region,
      REACT_APP_USER_POOL_ID: auth.userPoolId,
      REACT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
      REACT_APP_BROKER_URL: apiUrl,
    },
  });

  // Show the endpoint in the output
  stack.addOutputs({
    AuthenticatorAppUrl: portalUrl,
    ClientAppUrl: clientPortal.url || TEST_CLIENT_PORTAL_URL,
    ConfigBucket: configBucket.bucketName,
  });

  return {
    portal,
    portalUrl,
    clientPortal,
    uploadConfig,
  };
}
