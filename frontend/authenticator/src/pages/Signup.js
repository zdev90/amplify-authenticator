import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Formik } from "formik";
import * as Yup from "yup";

import Navbar from "../components/Navbar";
import VerificationForm from "../components/VerificationForm";
import PasswordInput from "../components/PasswordInput";

import "./Signup.css";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name is too short!")
    .max(50, "First name is too long!")
    .required("First name is required!"),
  lastName: Yup.string()
    .min(3, "Last name is too short!")
    .max(50, "Last name is too long!")
    .required("Last name is required!"),
  password: Yup.string()
    .min(2, "Password is too short!")
    .max(50, "Password is too long!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .min(2, "Password confirmation is too short!")
    .max(50, "Password confirmation is too long!")
    .required("Password confirmation is required!"),
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  confirmAge: Yup.bool()
    .required()
    .oneOf([true], "You must be at least 18 years of age!"),
});

export default function Signup({ userHasAuthenticated }) {
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

  function renderRegisterForm() {
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
              <PasswordInput
                required
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
              <PasswordInput
                required
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
        {newUser === null ? (
          renderRegisterForm()
        ) : (
          <VerificationForm
            userHasAuthenticated={userHasAuthenticated}
            user={newUser}
          />
        )}
      </Container>
    </div>
  );
}
