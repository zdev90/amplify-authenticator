import axios from "axios";
import jwt_decode from "jwt-decode";
import * as Yup from "yup";
import { Auth } from "aws-amplify";

import { setCookie } from "./cookieHelper";

const queryParamSchema = Yup.object().shape({
  authCode: Yup.string()
    .required()
    .matches(/^[a-zA-Z0-9-]*$/),
  redirectUri: Yup.string()
    .required()
    .matches(
      /^((?:http:\/\/)|(?:https:\/\/))(www.)?((?:[a-zA-Z0-9_-]+\.[a-z]{3})|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)|(localhost(?::\d+)?))([\/a-zA-Z0-9\.]*)$/
    ),
  clientState: Yup.string()
    .optional()
    .matches(/^[a-zA-Z0-9._=-]*$/),
});

export async function storeTokens(
  authorization_code,
  idToken,
  accessToken,
  refreshToken
) {
  var response = await axios.post(
    `${process.env.REACT_APP_API_URL}/storage`,
    {
      authorization_code: authorization_code,
      id_token: idToken,
      access_token: accessToken,
      refresh_token: refreshToken,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  return response;
}

export function setTokenCookie(type, token) {
  let tokenDecoded = jwt_decode(token);
  let tokenExpiry = tokenDecoded["exp"];
  setCookie(type, token, tokenExpiry);
}

export function setRefreshTokenCookie(refreshToken, accessToken) {
  // Use expiry of access token to set the refresh token cookie
  let tokenDecoded = jwt_decode(accessToken);
  let tokenExpiry = tokenDecoded["exp"];
  setCookie("refresh_token", refreshToken, tokenExpiry);
}

export async function storeTokenAndRedirect() {
  // Get tokens
  const authInfo = await Auth.currentSession();
  const idToken = authInfo.idToken.jwtToken;
  const accessToken = authInfo.accessToken.jwtToken;
  const refreshToken = authInfo.refreshToken.token;

  if (idToken && accessToken && refreshToken) {
    setTokenCookie("id_token", idToken);
    setTokenCookie("access_token", accessToken);

    /*
     * Set the refresh token cookie. Refresh token cannot be parsed for an an expiry so use the access token to get an expiry.
     * Although the refresh token has a different (longer) expiry than the access token, this is for the purpose of fast SSO,
     * so the refresh token cookie will get set again when the id or access token cookie expires
     */
    setRefreshTokenCookie(refreshToken, accessToken);
  } else {
    throw new Error(
      "Inconsistent application state: Tokens missing from current session"
    );
  }

  // Store tokens and redirect
  const queryStringParams = new URLSearchParams(window.location.search);
  const redirectUri = queryStringParams.get("redirect_uri");
  const authCode = queryStringParams.get("authorization_code");
  const clientState = queryStringParams.get("state");

  if (queryParamSchema.isValidSync({ redirectUri, authCode, clientState })) {
    const response = await storeTokens(
      authCode,
      idToken,
      accessToken,
      refreshToken
    );

    if (response.status === 200) {
      window.location.replace(
        redirectUri +
          "/?code=" +
          authCode +
          (clientState !== undefined ? "&state=" + clientState : "")
      );
    } else {
      throw new Error(
        "Could not store tokens. Server response: " + response.data
      );
    }
  } else {
    throw new Error("Invalid url parameters.");
  }
}
