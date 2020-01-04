import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../store";
import { authActions } from "../store/actions";
import { Alert, Button, FormControl } from "../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper
} from "../styled/common";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required")
});

const Register = () => {
  const { state } = useContext(Store);
  let history = useHistory();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (_get(state, "auth.isAuthenticated")) {
      history.replace("/");
    }
  }, []);
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Register</PageTitle>
        <Wrapper>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              passwordConfirm: ""
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, { setSubmitting }) => {
              delete values.passwordConfirm;
              setError("");
              return authActions
                .register(values)
                .then(d => {
                  setSubmitting(false);
                  setSuccess(true);
                })
                .catch(err => {
                  setSubmitting(false);
                  setError(err);
                });
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  component={FormControl.Input}
                />
                <Field
                  placeholder="Email"
                  type="email"
                  name="email"
                  component={FormControl.Input}
                />
                <Field
                  placeholder="Password"
                  type="password"
                  name="password"
                  component={FormControl.Input}
                />
                <Field
                  placeholder="Confirm Password"
                  type="password"
                  name="passwordConfirm"
                  component={FormControl.Input}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {}}
                  loading={isSubmitting}
                >
                  Register
                </Button>
                {success && (
                  <Alert
                    message="Please check your inbox for confirmation email with verification code!"
                    type="success"
                  />
                )}
                {error && <Alert type="error" message={error} />}
              </form>
            )}
          </Formik>
        </Wrapper>
      </FixedFormWrapper>
    </FixedContainer>
  );
};

export default Register;
