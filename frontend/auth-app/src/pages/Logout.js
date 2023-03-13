import { Auth } from "aws-amplify";
import { useEffect } from "react";
import * as Yup from "yup";

import { eraseCookie } from "../lib/cookieHelper";
import Loading from "../components/Loading";

const urlSchema = Yup.string()
  .required()
  .matches(
    /^((?:http:\/\/)|(?:https:\/\/))(www.)?((?:[a-zA-Z0-9_-]+\.[a-z]{3})|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)|(localhost(?::\d+)?))([\/a-zA-Z0-9\.]*)$/
  );

export default function Logout({ userHasAuthenticated }) {
  useEffect(() => {
    async function logout() {
      let queryStringParams = new URLSearchParams(window.location.search);
      let logoutUri = queryStringParams.get("logout_uri");

      if (urlSchema.isValidSync(logoutUri)) {
        eraseCookie("id_token");
        eraseCookie("access_token");
        eraseCookie("refresh_token");
        await Auth.signOut();
        userHasAuthenticated(false);
        window.location.assign(logoutUri);
      } else {
        urlSchema.validateSync(logoutUri);
        console.log("Invalid url parameters.");
      }
    }

    logout();
  }, [userHasAuthenticated]);

  return <Loading />;
}
