import React from "react";
import ReactDOM from "react-dom";
import { Amplify } from "aws-amplify";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

var url = window.location.href.split("/");
var domain = url[0] + "//" + url[2]

// Init Amplify
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_BROKER_URL.split("/")[2],
      scope: ["email", "profile", "openid"],
      redirectSignIn: domain,
      redirectSignOut: domain,
      responseType: "code",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
