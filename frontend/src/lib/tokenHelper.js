import axios from "axios";
import jwt_decode from "jwt-decode";
import { setCookie } from "./cookieHelper";

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
