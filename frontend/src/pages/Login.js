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
import "./Login.css";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Login({ userHasAuthenticated, isAuthenticated }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  console.log(isAuthenticated);

  async function submit(fields) {
    setIsLoading(true);

    try {
      // Log the user in
      const user = await Auth.signIn(fields.email, fields.password);
      console.log(user);
      userHasAuthenticated(true);
      // Redirect to the homepage
      history.push("/");
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
                By logging in, you agree to the AWS Event Terms & Conditions,
                AWS Code of Conduct, and the AWS Privacy Notice.
                <br />
                <br />
                Open support chat for assistance.
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
