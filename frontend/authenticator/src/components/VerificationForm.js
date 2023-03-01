import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  storeTokens,
  setTokenCookie,
  setRefreshTokenCookie,
} from "../lib/tokenHelper";

import "./VerificationForm.css";

const confirmSchema = Yup.object().shape({
  confirmationCode: Yup.string().required("Verification code is required"),
});

export default function VerificationForm({ userHasAuthenticated, user }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isResent, setIsResent] = useState(false);
  const [error, setError] = useState(null);

  async function resendCode() {
    setIsResent(false);
    setIsLoading(true);
    setError(null);

    try {
      await Auth.resendSignUp(user.email);
      setIsResent(true);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setIsLoading(false);
    }
  }

  async function confirm(fields) {
    setIsResent(false);
    setIsLoading(true);
    setError(null);

    // Check the user's confirmation code
    try {
      await Auth.confirmSignUp(user.email, fields.confirmationCode);
      await Auth.signIn(user.email, user.password);
      userHasAuthenticated(true);

      // Get tokens
      let authInfo = await Auth.currentSession();
      let idToken = authInfo.idToken.jwtToken;
      let accessToken = authInfo.accessToken.jwtToken;
      let refreshToken = authInfo.refreshToken.token;
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
      let queryStringParams = new URLSearchParams(window.location.search);
      let redirectUri = queryStringParams.get("redirect_uri");
      let authCode = queryStringParams.get("authorization_code");
      let clientState = queryStringParams.get("state");
      if (authCode && redirectUri) {
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
        /*
         * Sign in directly to broker (not from redirect from client as part of oauth2 flow)
         */
        history.push("/");
      }

      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setIsLoading(false);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        confirmationCode: "",
      }}
      onSubmit={confirm}
      validationSchema={confirmSchema}
      validateOnChange={false}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="Confirm-registration"
        >
          <div className="title">Let's make sure it's you</div>

          {error && (
            <Alert
              variant="danger"
              onClose={() => setError(null)}
              dismissible
              className="m-0"
            >
              {error}
            </Alert>
          )}

          {isResent && (
            <Alert key="success" variant="success">
              The verification code has been sent again to your inbox.
            </Alert>
          )}

          <Form.Text className="Confirm-text">
            We've emailed you a verification code.
            <br />
            If you don't see it in your inbox, check your spam folder.
          </Form.Text>

          <Form.Group
            controlId="confirmationCode"
            size="lg"
            className="position-relative"
          >
            <Form.Label>
              Verification code <span>*</span>
            </Form.Label>
            <Form.Control
              autoFocus
              type="tel"
              value={values.confirmationCode}
              onChange={handleChange}
              disabled={isLoading}
              isValid={touched.confirmationCode && !errors.confirmationCode}
              isInvalid={errors.confirmationCode}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmationCode}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            block
            size="lg"
            type="submit"
            variant="primary"
            disabled={isLoading}
            className="mt-5"
          >
            Verify Account
          </Button>

          <Button
            size="lg"
            type="button"
            variant="link"
            disabled={isLoading}
            onClick={resendCode}
            className="mx-auto mt-3 mb-3"
          >
            Resend code
          </Button>
        </Form>
      )}
    </Formik>
  );
}
