# Cognito Auth App

Auth application to authenticate several websites and mobile apps.\

This is a serverless project using the Serverless framework(sst.dev) and authentication is based on standard JWT token using AWS Amplify and Amazon Cognito.\

This app can be integrated with any application supporting oAuth2 and provides Single Sign On(SSO) on all services.

## Getting Started

### Prerequisites

Make sure your local machine has `Node.js 16` and `npm 7` installed.

### Install dependencies

```sh
yarn install
```

## Commands

### `npm run dev`

Starts the Live Lambda Development environment.

### `npm run portal`

Run the frontend app in development environment.

### `npm run build`

Build your app and synthesize your stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy, a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally removes, a specific stack.

### `npm run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).
