import { AuthStack } from "./stacks/AuthStack";
import { ApiStack } from "./stacks/ApiStack";
import { PortalStack } from "./stacks/PortalStack";
import { CodesStack } from "./stacks/CodesStack";

export default {
  config(_input) {
    return {
      name: "auth-app",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(AuthStack).stack(CodesStack).stack(ApiStack).stack(PortalStack);
  },
};
