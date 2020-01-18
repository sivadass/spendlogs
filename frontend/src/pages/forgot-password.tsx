import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../store";
import { authActions } from "../store/actions";
import { Alert, Button, FormControl, Icon } from "../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper,
  AuthNavLinks
} from "../styled/common";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const ForgotPassword = () => {
  const { state } = useContext(Store);
  let history = useHistory();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (_get(state, "auth.isAuthenticated")) {
      history.replace("/");
    }
  }, []);
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Forgot Password</PageTitle>
        <Wrapper>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSuccess(false);
              setError("");
              return authActions
                .forgotPassword(values)
                .then(() => {
                  resetForm({});
                  setSuccess(true);
                  setSubmitting(false);
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
                  placeholder="Email"
                  type="email"
                  name="email"
                  component={FormControl.Input}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {}}
                  loading={isSubmitting}
                >
                  RESET PASSWORD
                </Button>
                <AuthNavLinks>
                  <Link to="login">
                    {" "}
                    <Icon name="arrow_back" /> Back to Login
                  </Link>
                </AuthNavLinks>
                {success && (
                  <Alert
                    type="success"
                    message="Please check your inbox for password reset instructions."
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

export default ForgotPassword;
