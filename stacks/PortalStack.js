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

  const stackOutputs = {
    ConfigBucket: configBucket.bucketName
  };

  const returnValue = {};

  console.log(app.stage);
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

  stackOutputs["AuthAppUrl"] = returnValue["portalUrl"] = portal.url || TEST_PORTAL_URL;
  returnValue["portal"] = portal;

  const uploadConfig = new aws_s3_deployment.BucketDeployment(
    stack,
    "UploadConfig",
    {
      sources: [
        aws_s3_deployment.Source.jsonData(configObjectKey, {
          PORTAL_URL: stackOutputs.AuthAppUrl,
        }),
      ],
      destinationBucket: configBucket.cdk.bucket,
    }
  );

  returnValue["uploadConfig"] = uploadConfig;

  if (app.stage !== "production") {
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

    stackOutputs["ClientApp1Url"] = clientPortal1.url || TEST_CLIENT_PORTAL1_URL;
    returnValue["clientPortal1"] = clientPortal1;

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

    stackOutputs["ClientApp2Url"] = clientPortal2.url || TEST_CLIENT_PORTAL2_URL;
    returnValue["clientPortal2"] = clientPortal2;
  }
  

  // Show the endpoint in the output
  stack.addOutputs(stackOutputs);

  return returnValue;
}
