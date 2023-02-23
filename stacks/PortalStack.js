import { StaticSite, use, Config } from "sst/constructs";
import { AuthStack } from "./AuthStack";
import { ApiStack } from "./ApiStack";

export function PortalStack({ stack, app }) {
  const { auth } = use(AuthStack);
  const { apiUrl, api } = use(ApiStack);

  // Deploy our React app
  const portal = new StaticSite(stack, "Portal", {
    path: "frontend",
    buildCommand: "npm run build",
    buildOutput: "build",
    // Pass in our environment variables
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

  // Show the endpoint in the output
  stack.addOutputs({
    SiteUrl: portalUrl,
  });

  return {
    portal,
    portalUrl,
  };
}
