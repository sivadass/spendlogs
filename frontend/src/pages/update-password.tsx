import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  FixedFormWrapper
} from "../styled/common";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const ForgotPassword = () => {
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
        <PageTitle>Forgot Password</PageTitle>
        <Wrapper>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={ForgotPasswordSchema}
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
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {}}
                  loading={isSubmitting}
                >
                  SEND ME PASSWORD RESET INSTRUCTIONS
                </Button>
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
