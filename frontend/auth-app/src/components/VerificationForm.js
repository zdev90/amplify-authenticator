import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Formik } from "formik";
import * as Yup from "yup";

import { storeTokenAndRedirect } from "../lib/tokenHelper";

import "./VerificationForm.css";

const confirmSchema = Yup.object().shape({
  confirmationCode: Yup.string().required("Verification code is required"),
});

export default function VerificationForm({
  userHasAuthenticated,
  isAuthenticated,
  user,
}) {
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
      await storeTokenAndRedirect();
      userHasAuthenticated(true);
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
            We've emailed you a verification code. If you don't see it in your
            inbox, check your spam folder.
          </Form.Text>

          <Form.Group
            controlId="confirmationCode"
            size="lg"
            className="position-relative"
          >
            <Form.Label>Verification code</Form.Label>
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
            Verify account
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
