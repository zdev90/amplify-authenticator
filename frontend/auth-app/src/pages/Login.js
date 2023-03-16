import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Navbar from "../components/Navbar";
import VerificationForm from "../components/VerificationForm";
import Footer from "../components/Footer";
import PasswordInput from "../components/PasswordInput";
import Loading from "../components/Loading";
import { storeTokenAndRedirect } from "../lib/tokenHelper";

import "./Login.css";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Password is too short")
    .max(50, "Password is too long")
    .required("Password is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

export default function Login({ userHasAuthenticated, isAuthenticated }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function submit(fields) {
    setIsLoading(true);
    setError(null);

    try {
      // Log the user in
      await Auth.signIn(fields.email, fields.password);
      await storeTokenAndRedirect();
      userHasAuthenticated(true);
      setIsLoading(false);
    } catch (e) {
      if (e.message === "User is not confirmed.") {
        setUser({ ...fields });
        setVerifyCode(true);
      } else {
        console.error(e);
        setError(e.message);
      }
      setIsLoading(false);
    }
  }

  function renderLoginForm() {
    return (
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={submit}
        validationSchema={schema}
        validateOnChange={true}
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
            <div className="title">AWS Events login</div>

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

            <Form.Group
              size="lg"
              controlId="email"
              className="position-relative"
            >
              <Form.Label>Business email</Form.Label>
              <Form.Control
                required
                autoFocus
                type="email"
                value={values.email}
                onChange={handleChange}
                disabled={isLoading}
                isValid={touched.email && !errors.email}
                isInvalid={errors.email}
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              size="lg"
              controlId="password"
              className="position-relative"
            >
              <Form.Label>Password</Form.Label>
              <PasswordInput
                required
                value={values.password}
                onChange={handleChange}
                disabled={isLoading}
                isValid={touched.password && !errors.password}
                isInvalid={errors.password}
                placeholder="Enter password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Text className="Login-text">
              By logging in, you agree to the{" "}
              <a
                href="https://aws.amazon.com/events/terms/"
                target="_blank"
                rel="noreferrer"
              >
                AWS Event Terms & Conditions
              </a>
              ,{" "}
              <a
                href="https://aws.amazon.com/codeofconduct/"
                target="_blank"
                rel="noreferrer"
              >
                AWS Code of Conduct
              </a>
              , and the{" "}
              <a
                href="https://aws.amazon.com/privacy/"
                target="_blank"
                rel="noreferrer"
              >
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
              Log in
            </Button>

            <Button
              block
              size="lg"
              type="button"
              disabled={isLoading}
              variant="outline-primary"
              onClick={() =>
                history.push({
                  pathname: "/register",
                  search: window.location.search,
                })
              }
              className="mt-3"
            >
              Create account
            </Button>

            <Button
              size="lg"
              type="button"
              disabled={isLoading}
              variant="link"
              onClick={() =>
                history.push({
                  pathname: "/reset",
                  search: window.location.search,
                })
              }
              className="mt-3 mx-auto"
            >
              Forgot password?
            </Button>
          </Form>
        )}
      </Formik>
    );
  }

  if (isAuthenticated) {
    try {
      storeTokenAndRedirect();
    } catch (e) {
      console.error(e);
    }
    return <Loading />;
  }

  return (
    <div className="Login">
      <Container>
        <Navbar />

        {verifyCode && (
          <VerificationForm
            userHasAuthenticated={userHasAuthenticated}
            user={user}
            isAuthenticated={isAuthenticated}
          />
        )}
        {!verifyCode && renderLoginForm()}

        <Footer />
      </Container>
    </div>
  );
}
