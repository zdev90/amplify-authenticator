import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Logout({ userHasAuthenticated }) {
  const location = useLocation();

  useEffect(async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
  }, []);

  return <></>;
}
