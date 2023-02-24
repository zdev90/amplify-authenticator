# Cognito Auth App

Auth application to authenticate several websites and mobile apps.

This is a serverless project using the Serverless framework(sst.dev) and authentication is based on standard JWT token using AWS Amplify and Amazon Cognito.

This app can be integrated with any application supporting oAuth2 and provides Single Sign On(SSO) on all services.

## Getting Started

### Prerequisites

Make sure your local machine has `Node.js 16` and `npm 7` installed.

### Install dependencies

```sh
yarn install
```

### Set the AWS environmental variables

```sh
export AWS_ACCESS_KEY_ID="ASIAXQxxx"
export AWS_SECRET_ACCESS_KEY="pgs3CiM8knxxx"
export AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjExxx"
```

### Create cognito app client

After the first deployment, add an app client and set up the hosted UI([documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-configuring-app-integration.html))

For development purpose, you can set callback URLs as `http://localhost:3001`

Retrieve app client id and set `REACT_APP_USER_POOL_CLIENT_ID` environment variable in `frontend/authenticator-client/.env`

## Commands

### `npm run dev`

Starts the Live Lambda Development environment.

### `npm run auth-app`

Run the frontend auth app in development environment.

### `npm run auth-app-client`

Run the frontend client app in development environment.

### `npm run build`

Build your app and synthesize your stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy, a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally removes, a specific stack.

### `npm run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).
