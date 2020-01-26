import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../store";
import { actionTypes, authActions } from "../store/actions";
import { Alert, Button, FormControl } from "../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper,
  AuthNavLinks
} from "../styled/common";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required")
});

const Login = () => {
  const { state, dispatch } = useContext(Store);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [error, setError] = useState("");
  useEffect(() => {
    if (_get(state, "auth.isAuthenticated")) {
      history.replace("/");
    }
  }, []);
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Login</PageTitle>
        <Wrapper>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setError("");
              return authActions
                .login(values)
                .then(d => {
                  dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    payload: d
                  });
                  setSubmitting(false);
                  history.replace(from);
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
                <Field
                  placeholder="Password"
                  type="password"
                  name="password"
                  component={FormControl.Input}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {}}
                  loading={isSubmitting}
                >
                  LOGIN
                </Button>
                <AuthNavLinks>
                  <Link to="forgot-password">Forgot Password?</Link>
                </AuthNavLinks>
                <AuthNavLinks>
                  Or New here? <Link to="register">Signup Now!</Link>
                </AuthNavLinks>
                {error && <Alert type="error" message={error} />}
              </form>
            )}
          </Formik>
        </Wrapper>
      </FixedFormWrapper>
    </FixedContainer>
  );
};

export default Login;
