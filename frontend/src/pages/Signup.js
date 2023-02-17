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
      setIsLoading(false);
      userHasAuthenticated(true);
      history.push("/");
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
      <Row className="Signup-container">
        <Col md={7}>
          <Formik
            enableReinitialize
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
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
              <Form noValidate onSubmit={handleSubmit}>
                <div className="title">Register</div>
                <Row>
                  <Col md={6}>
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
                  </Col>
                  <Col md={6}>
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
                  </Col>
                </Row>
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
                <Button
                  block
                  size="lg"
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
        <Col md={5}>
          <div className="Signup-info">
            <div className="title">Information</div>

            <div className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
        </Col>
      </Row>
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
