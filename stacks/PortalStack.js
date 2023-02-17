import { StaticSite, use } from "sst/constructs";
import { AuthStack } from "./AuthStack";

export function PortalStack({ stack, app }) {
  const { auth } = use(AuthStack);

  // Deploy our React app
  const site = new StaticSite(stack, "Portal", {
    path: "frontend",
    buildCommand: "npm run build",
    buildOutput: "build",
    // Pass in our environment variables
    environment: {
      // REACT_APP_API_URL: api.url,
      REACT_APP_REGION: app.region,
      REACT_APP_USER_POOL_ID: auth.userPoolId,
      REACT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
      REACT_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    },
  });

  // Show the endpoint in the output
  stack.addOutputs({
    SiteUrl: site.url || "",
  });
}
