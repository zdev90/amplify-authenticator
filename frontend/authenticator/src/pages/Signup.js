import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaCheck, FaTimes } from "react-icons/fa";

import Navbar from "../components/Navbar";
import VerificationForm from "../components/VerificationForm";
import PasswordInput from "../components/PasswordInput";

import "./Signup.css";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name is too short")
    .max(50, "First name is too long")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Last name is too short")
    .max(50, "Last name is too long")
    .required("Last name is required"),
  password: Yup.string()
    .min(12, "Password must contain at least 12 characters")
    .matches(/\w*[a-z]\w*/, "Password must contain a lower case letter")
    .matches(/\w*[A-Z]\w*/, "Password must contain an upper case letter")
    .matches(/\d/, "Password must contain a number")
    .matches(
      /[!+@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must contain a special character or a space"
    )
    .strict(true)
    .trim("Password must not contain a leading or trailing space")
    .required("Password is required"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords does not match")
  //   .required("Confirm password is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  confirmAge: Yup.bool()
    .required()
    .oneOf([true], "Age confirmation is required"),
});

export default function Signup({ userHasAuthenticated }) {
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function register(fields) {
    setIsLoading(true);
    setError(null);

    try {
      // Sign up the user
      const { user } = await Auth.signUp({
        username: fields.email,
        password: fields.password,
        attributes: {
          given_name: fields.firstName,
          family_name: fields.lastName,
          "custom:age_confirmation": fields.confirmAge ? "true" : "false",
        },
        // autoSignIn: {
        //   enabled: true,
        // },
      });
      setIsLoading(false);
      setNewUser({ user, ...fields });
    } catch (e) {
      console.error(e);
      setError(e.message);
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
          // confirmPassword: "",
          confirmAge: false,
        }}
        onSubmit={register}
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
          <Form noValidate onSubmit={handleSubmit} className="Signup-form">
            <div className="title">Create account</div>

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
              controlId="firstName"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                First name <span>*</span>
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
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="lastName"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                Last name <span>*</span>
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
              <Form.Control.Feedback type="invalid">
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
                <div>This will also be used as your username</div>
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
              <Form.Control.Feedback type="invalid">
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
              {/* <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback> */}
              <Form.Control.Feedback
                type={
                  Yup.string()
                    .matches(/\w*[a-z]\w*/)
                    .isValidSync(values.password)
                    ? "valid"
                    : "invalid"
                }
              >
                {Yup.string()
                  .matches(/\w*[a-z]\w*/)
                  .isValidSync(values.password) ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                Password must contain a lower case letter
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type={
                  Yup.string()
                    .matches(/\w*[A-Z]\w*/)
                    .isValidSync(values.password)
                    ? "valid"
                    : "invalid"
                }
              >
                {Yup.string()
                  .matches(/\w*[A-Z]\w*/)
                  .isValidSync(values.password) ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                Password must contain an upper case letter
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type={
                  Yup.string().matches(/\d/).isValidSync(values.password)
                    ? "valid"
                    : "invalid"
                }
              >
                {Yup.string().matches(/\d/).isValidSync(values.password) ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                Password must contain a number
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type={
                  Yup.string().min(12).isValidSync(values.password)
                    ? "valid"
                    : "invalid"
                }
              >
                {Yup.string().min(12).isValidSync(values.password) ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                Password must contain at least 12 characters
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type={
                  Yup.string()
                    .matches(/[!+@#$%^&*()\-_"=+{}; :,<.>]/)
                    .isValidSync(values.password)
                    ? "valid"
                    : "invalid"
                }
              >
                {Yup.string()
                  .matches(/[!+@#$%^&*()\-_"=+{}; :,<.>]/)
                  .isValidSync(values.password) ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                Password must contain a special character or a space
              </Form.Control.Feedback>
              <Form.Control.Feedback
                type={
                  Yup.string()
                    .strict(true)
                    .trim()
                    .isValidSync(values.password) && values.password.length
                    ? "valid"
                    : "invalid"
                }
              >
                {Yup.string()
                  .strict(true)
                  .trim()
                  .isValidSync(values.password) && values.password.length ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                Password must not contain a leading or trailing space
              </Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Group
              controlId="confirmPassword"
              size="lg"
              className="position-relative"
            >
              <Form.Label>
                Confirm password <span>*</span>
              </Form.Label>
              <PasswordInput
                required
                onChange={handleChange}
                value={values.confirmPassword}
                disabled={isLoading}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group> */}

            <Form.Group controlId="confirmAge" size="lg">
              <Form.Check
                required
                name="confirmAge"
                label="I confirm that I will be at least 18 years old on the first day of the event"
                onChange={handleChange}
                isInvalid={!!errors.confirmAge}
                feedback={errors.confirmAge}
                feedbackType="invalid"
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
