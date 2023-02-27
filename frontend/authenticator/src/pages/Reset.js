import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Navbar from "../components/Navbar";
import VerificationForm from "../components/VerificationForm";
import Footer from "../components/Footer";
import {
  storeTokens,
  setTokenCookie,
  setRefreshTokenCookie,
} from "../lib/tokenHelper";

import "./Login.css";

const schema = Yup.object().shape({
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
});

const resetSchema = Yup.object().shape({
  confirmationCode: Yup.string().required("Verification code is required!"),
  password: Yup.string()
    .min(2, "Password is too short!")
    .max(50, "Password is too long!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .min(2, "Password confirmation is too short!")
    .max(50, "Password confirmation is too long!")
    .required("Password confirmation is required!"),
});

export default function Reset({ userHasAuthenticated, isAuthenticated }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState("forgot");
  const [email, setEmail] = useState(null);

  async function sendCode(fields) {
    setIsLoading(true);

    try {
      await Auth.forgotPassword(fields.email);
      setEmail(fields.email);
      setStage("reset");
    } catch (e) {
      alert(e);
    }

    setIsLoading(false);
  }

  async function resetPassword(fields) {
    setIsLoading(true);

    try {
      await Auth.forgotPasswordSubmit(
        email,
        fields.confirmationCode,
        fields.password
      );
      setStage("completed");
    } catch (e) {
      alert(e);
    }

    setIsLoading(false);
  }

  function renderForgotPassword() {
    return (
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={sendCode}
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
            <div className="title">Forgot your password?</div>

            <Form.Text className="Login-text mt-2 mb-0">
              Enter your Email below and we will send a message to reset your
              password.
            </Form.Text>

            <Form.Group
              size="lg"
              controlId="email"
              className="position-relative my-5"
            >
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                required
                autoFocus
                type="email"
                placeholder="Enter email"
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
            <Button
              block
              size="lg"
              type="submit"
              disabled={isLoading}
              variant="primary"
            >
              Send code
            </Button>
            <Button
              size="lg"
              type="button"
              disabled={isLoading}
              variant="link"
              onClick={() =>
                history.push({
                  pathname: "/login",
                  search: window.location.search,
                })
              }
              className="mt-3 mx-auto"
            >
              Back to login
            </Button>
          </Form>
        )}
      </Formik>
    );
  }

  function renderResetPassword() {
    return (
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={resetPassword}
        validationSchema={resetSchema}
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
            <div className="title">Reset password</div>

            <Form.Text className="Login-text mt-2 mb-0">
              Enter new password and code below which you received in your
              email.
            </Form.Text>

            <Form.Group
              controlId="confirmationCode"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                verification code <span>*</span>
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

            <Button
              block
              size="lg"
              type="submit"
              disabled={isLoading}
              variant="primary"
              className="mt-5"
            >
              Reset my password
            </Button>

            <Button
              size="lg"
              type="button"
              disabled={isLoading}
              variant="link"
              onClick={() =>
                history.push({
                  pathname: "/login",
                  search: window.location.search,
                })
              }
              className="mt-3 mx-auto"
            >
              Back to login
            </Button>
          </Form>
        )}
      </Formik>
    );
  }

  function renderCompleted() {
    return (
      <Form noValidate>
        <div className="title">Reset password</div>

        <Form.Text className="Login-text mt-3 mb-5">
          Your password has been reset successfully.
        </Form.Text>

        <Button
          size="lg"
          type="button"
          disabled={isLoading}
          variant="link"
          onClick={() =>
            history.push({
              pathname: "/login",
              search: window.location.search,
            })
          }
          className="mt-3 mx-auto"
        >
          Back to login
        </Button>
      </Form>
    );
  }

  return (
    <div className="Login">
      <Container>
        <Navbar />

        {stage === "forgot" && renderForgotPassword()}
        {stage === "reset" && renderResetPassword()}
        {stage === "completed" && renderCompleted()}

        <Footer />
      </Container>
    </div>
  );
}
