import { StaticSite, use, Config } from "sst/constructs";
import { aws_s3, aws_s3_deployment } from "aws-cdk-lib";

import { AuthStack } from "./AuthStack";
import { ApiStack } from "./ApiStack";
import { ConfigStack } from "./ConfigStack";

const TEST_PORTAL_URL = "http://localhost:3000";
const TEST_CLIENT_PORTAL1_URL = "http://localhost:3001";
const TEST_CLIENT_PORTAL2_URL = "http://localhost:3002";

export function PortalStack({ stack, app }) {
  const { auth } = use(AuthStack);
  const { apiUrl, api } = use(ApiStack);
  const { configBucket, configObjectKey } = use(ConfigStack);

  // Frontend auth app
  const portal = new StaticSite(stack, "AuthPortal", {
    path: "frontend/auth-app",
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

  // Client frontend app1
  const clientPortal1 = new StaticSite(stack, "ClientPortal1", {
    path: "frontend/client-example1",
    buildCommand: "npm run build",
    buildOutput: "build",
    environment: {
      REACT_APP_REGION: app.region,
      REACT_APP_USER_POOL_ID: auth.userPoolId,
      REACT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
      REACT_APP_BROKER_URL: apiUrl,
    },
  });

  // Client frontend app2
  const clientPortal2 = new StaticSite(stack, "ClientPortal2", {
    path: "frontend/client-example2",
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
    AuthAppUrl: portalUrl,
    ClientApp1Url: clientPortal1.url || TEST_CLIENT_PORTAL1_URL,
    ClientApp2Url: clientPortal2.url || TEST_CLIENT_PORTAL2_URL,
    ConfigBucket: configBucket.bucketName,
  });

  return {
    portal,
    portalUrl,
    clientPortal1,
    clientPortal2,
    uploadConfig,
  };
}
