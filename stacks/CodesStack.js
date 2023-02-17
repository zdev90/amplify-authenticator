import { Table } from "sst/constructs";

export function CodesStack({ stack }) {
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

  return {
    codesTable,
  };
}
