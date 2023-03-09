import { AuthStack } from "./stacks/AuthStack";
import { ApiStack } from "./stacks/ApiStack";
import { PortalStack } from "./stacks/PortalStack";
import { CodesStack } from "./stacks/CodesStack";
import ConfigStack from "./stacks/ConfigStack";

export default {
  config(_input) {
    return {
      name: "auth-app",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app
      .stack(ConfigStack)
      .stack(AuthStack)
      .stack(CodesStack)
      .stack(ApiStack)
      .stack(PortalStack);
  },
};
