import { StaticSite, use, Config } from "sst/constructs";
import { AuthStack } from "./AuthStack";
import { ApiStack } from "./ApiStack";

export function PortalStack({ stack, app }) {
  const { auth } = use(AuthStack);
  const { apiUrl, api } = use(ApiStack);

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

  const portalUrl = portal.url || "http://localhost:3000";

  const PORTAL_URL = new Config.Parameter(stack, "PORTAL_URL", {
    value: portalUrl,
  });
  api.bind([PORTAL_URL]);

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
    ClientAppUrl: clientPortal.url || "http://localhost:3001",
  });

  return {
    portal,
    portalUrl,
    clientPortal,
  };
}
