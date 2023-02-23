import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { eraseCookie } from "../lib/cookieHelper";

export default function Logout({ userHasAuthenticated }) {
  const location = useLocation();

  useEffect(async () => {
    eraseCookie("id_token");
    eraseCookie("access_token");
    eraseCookie("refresh_token");
    await Auth.signOut();
    userHasAuthenticated(false);

    let queryStringParams = new URLSearchParams(window.location.search);
    let logoutUri = queryStringParams.get("logout_uri");
    if (logoutUri) window.location.assign(logoutUri);
  }, []);

  return <></>;
}
