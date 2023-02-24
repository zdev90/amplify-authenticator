import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Formik } from "formik";
import * as Yup from "yup";

import Navbar from "../components/Navbar";
import {
  storeTokens,
  setTokenCookie,
  setRefreshTokenCookie,
} from "../lib/tokenHelper";

import "./Login.css";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Password is too short!")
    .max(50, "Password is too long!")
    .required("Password is required"),
  email: Yup.string().email("Email is invalid!").required("Email is required"),
});

export default function Login({ userHasAuthenticated, isAuthenticated }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function submit(fields) {
    setIsLoading(true);

    try {
      // Log the user in
      const user = await Auth.signIn(fields.email, fields.password);
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
        console.error(
          "Inconsistent application state: Tokens missing from current session"
        );
        return;
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
          console.error(
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
      alert(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <Container>
        <Navbar />

        <Formik
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={submit}
          validationSchema={schema}
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
            <Form noValidate onSubmit={handleSubmit}>
              <div className="title">Login</div>
              <Form.Group
                size="lg"
                controlId="email"
                className="position-relative"
              >
                <Form.Label>
                  Email <span>*</span>
                </Form.Label>
                <Form.Control
                  required
                  autoFocus
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  isValid={touched.email && !errors.email}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                size="lg"
                controlId="password"
                className="position-relative"
              >
                <Form.Label>
                  Password <span>*</span>
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  isValid={touched.password && !errors.password}
                  isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Text className="Login-text">
                By logging in, you agree to the{" "}
                <a href="https://aws.amazon.com/events/terms/" target="_blank">
                  AWS Event Terms & Conditions
                </a>
                ,{" "}
                <a href="https://aws.amazon.com/codeofconduct/" target="_blank">
                  AWS Code of Conduct
                </a>
                , and the{" "}
                <a href="https://aws.amazon.com/privacy/" target="_blank">
                  AWS Privacy Notice
                </a>
                .
              </Form.Text>
              <Button
                block
                size="lg"
                type="submit"
                disabled={isLoading}
                variant="primary"
              >
                Login
              </Button>
              <Button
                block
                size="lg"
                type="button"
                disabled={isLoading}
                variant="outline-primary"
                onClick={() => history.push("/register")}
                className="mt-3"
              >
                Create account
              </Button>
              <Button
                size="lg"
                type="button"
                disabled={isLoading}
                variant="link"
                onClick={() => {}}
                className="mt-3 mx-auto"
              >
                Forgot password?
              </Button>
            </Form>
          )}
        </Formik>

        <div className="Footer">
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="#">Cookie Preferences</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#">Privacy Policy</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#">Site Terms</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#">Terms & Conditions</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#">Code of Conduct</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="Copyright">
            © 2023, Amazon re:Inforce or its affiliates. All rights reserved
          </div>
        </div>
      </Container>
    </div>
  );
}
