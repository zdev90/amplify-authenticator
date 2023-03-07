import { Auth } from "aws-amplify";
import { useEffect } from "react";

import { eraseCookie } from "../lib/cookieHelper";

export default function Logout({ userHasAuthenticated }) {
  useEffect(() => {
    async function logout() {
      eraseCookie("id_token");
      eraseCookie("access_token");
      eraseCookie("refresh_token");
      await Auth.signOut();
      userHasAuthenticated(false);

      let queryStringParams = new URLSearchParams(window.location.search);
      let logoutUri = queryStringParams.get("logout_uri");
      if (logoutUri) window.location.assign(logoutUri);
    }

    logout();
  }, [userHasAuthenticated]);

  return <></>;
}
