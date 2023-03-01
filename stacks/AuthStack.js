import { Cognito } from "sst/constructs";
import { StringAttribute } from "aws-cdk-lib/aws-cognito";

export function AuthStack({ stack, app }) {
  // Create a Cognito User Pool to manage auth
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
    cdk: {
      userPool: {
        standardAttributes: {
          givenName: { required: true, mutable: true },
          familyName: { required: true, mutable: true },
        },
        customAttributes: {
          ageConfirmation: new StringAttribute({ mutable: true }),
        },
      },
    },
  });

  return {
    auth,
  };
}
