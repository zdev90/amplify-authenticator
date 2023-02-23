import { Table } from "sst/constructs";
import * as kms from "aws-cdk-lib/aws-kms";

export function CodesStack({ stack, app }) {
  // Create the DynamoDB table
  const codesTable = new Table(stack, "codes", {
    fields: {
      authorization_code: "string",
      code_challenge: "string",
      client_id: "string",
      redirect_uri: "string",
      code_expiry: "number",
      record_expiry: "number",
    },
    primaryIndex: { partitionKey: "authorization_code" },
    globalIndexes: {
      clientIndex: {
        partitionKey: "authorization_code",
        sortKey: "client_id",
      },
      redirectUriIndex: {
        partitionKey: "client_id",
        sortKey: "redirect_uri",
      },
    },
    stream: false,
  });

  const encryptionKey = new kms.Key(
    stack,
    "alias/authAppTokenStorageKey-" + app.stage,
    {
      enableKeyRotation: true,
    }
  );

  return {
    codesTable,
    encryptionKey,
  };
}
