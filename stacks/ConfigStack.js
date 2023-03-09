import { Bucket } from "sst/constructs";
import * as cdk from "aws-cdk-lib";

export const ConfigStack = ({ stack }) => {
  const configBucket = new Bucket(stack, "Config", {
    cdk: {
      bucket: {
        autoDeleteObjects: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
    },
  });
  const configObjectKey = "config.json";

  return {
    configBucket,
    configObjectKey,
  };
};

export default ConfigStack;
