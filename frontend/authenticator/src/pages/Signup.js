import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Navbar from "../components/Navbar";
import {
  storeTokens,
  setTokenCookie,
  setRefreshTokenCookie,
} from "../lib/tokenHelper";

import "./Signup.css";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  confirmAge: Yup.bool()
    .required()
    .oneOf([true], "You must be at least 18 years of age!"),
});

const confirmSchema = Yup.object().shape({
  confirmationCode: Yup.string().required("Required"),
});

export default function Signup({ userHasAuthenticated }) {
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function register(fields) {
    setIsLoading(true);

    try {
      // Sign up the user
      const { user } = await Auth.signUp({
        username: fields.email,
        password: fields.password,
        attributes: {
          given_name: fields.firstName,
          family_name: fields.lastName,
        },
        // autoSignIn: {
        //   enabled: true,
        // },
      });
      setIsLoading(false);
      setNewUser({ user, ...fields });
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function confirm(fields) {
    setIsLoading(true);

    // Check the user's confirmation code
    try {
      await Auth.confirmSignUp(newUser.email, fields.confirmationCode);
      await Auth.signIn(newUser.email, newUser.password);
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
        // history.push("/");
      }

      setIsLoading(false);
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
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
            <div className="title">Verify your email</div>
            <Form.Text className="Confirm-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Form.Text>
            <Form.Group
              controlId="confirmationCode"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                Enter your verification code <span>*</span>
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
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.confirmationCode}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              block
              size="lg"
              type="submit"
              variant="primary"
              disabled={isLoading}
            >
              Verify Account
            </Button>
          </Form>
        )}
      </Formik>
    );
  }

  function renderForm() {
    return (
      <Formik
        enableReinitialize
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          confirmAge: false,
        }}
        onSubmit={register}
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
          <Form noValidate onSubmit={handleSubmit} className="Signup-form">
            <div className="title">Create account</div>

            <Form.Group
              controlId="firstName"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                First Name <span>*</span>
              </Form.Label>
              <Form.Control
                required
                autoFocus
                type="text"
                value={values.firstName}
                onChange={handleChange}
                disabled={isLoading}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={errors.firstName}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="lastName"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                Last Name <span>*</span>
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={values.lastName}
                onChange={handleChange}
                disabled={isLoading}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={errors.lastName}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="email"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                required
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
              controlId="password"
              size="lg"
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

            <Form.Group
              controlId="confirmPassword"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                Confirm Password <span>*</span>
              </Form.Label>
              <Form.Control
                required
                type="password"
                onChange={handleChange}
                value={values.confirmPassword}
                disabled={isLoading}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="confirmAge" size="lg">
              <Form.Check
                required
                name="confirmAge"
                label="I confirm that I will be at least 18 years old on the first day of the event"
                onChange={handleChange}
                isInvalid={!!errors.confirmAge}
                feedback={errors.confirmAge}
                feedbackType="invalid"
                feedbackTooltip
              />
            </Form.Group>

            <Form.Text className="Signup-info">
              <h3>AWS CODE OF CONDUCT</h3>
              AWS takes reports of misconduct seriously and encourages event
              participants to report disruptive or otherwise unsafe behavior.
              Attendees who do not comply with the{" "}
              <a href="https://aws.amazon.com/codeofconduct/" target="_blank">
                AWS Code of Conduct
              </a>{" "}
              may be required to leave all event venues and will be banned from
              future AWS event participation.
              <br />
              <br />
              By creating an account, you agree to the{" "}
              <a href="https://aws.amazon.com/events/terms/" target="_blank">
                AWS Event Terms & Conditions
              </a>{" "}
              and the{" "}
              <a href="https://aws.amazon.com/codeofconduct/" target="_blank">
                AWS Code of Conduct
              </a>
              . Your information will be handled in accordance with the{" "}
              <a href="https://aws.amazon.com/privacy/" target="_blank">
                AWS Privacy Notice
              </a>
              .
            </Form.Text>

            <Button
              block
              size="lg"
              type="submit"
              variant="primary"
              disabled={isLoading}
            >
              Create account
            </Button>
          </Form>
        )}
      </Formik>
    );
  }

  return (
    <div className="Signup">
      <Container>
        <Navbar variant="dark" />
        {newUser === null ? renderForm() : renderConfirmationForm()}
      </Container>
    </div>
  );
}
