import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import styled from "styled-components";
import jwtDecode from "jwt-decode";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../store";
import useQuery from "../hooks/useQuery";
import { authActions } from "../store/actions";
import { Alert, Button, FormControl, Icon } from "../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper,
  AuthNavLinks
} from "../styled/common";

const UpdatePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required")
});

const useDecode = (token: string) => {
  try {
    const decode = jwtDecode(token);
    return decode;
  } catch (err) {
    console.log(err);
  }
};

const ForgotPassword = () => {
  const { state, dispatch } = useContext(Store);
  let query = useQuery();
  const token = query.get("token") || "";
  const decoded = useDecode(token);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  if (!token || !decoded) {
    return (
      <FixedContainer>
        <FixedFormWrapper>
          <PageTitle>Update Password</PageTitle>
          <Wrapper>
            <Message>
              <Alert
                type="error"
                message="Sorry! Invalid or no token provided!"
              />
            </Message>
          </Wrapper>
        </FixedFormWrapper>
      </FixedContainer>
    );
  }
  if (token && new Date(_get(decoded, "expiry")) < new Date()) {
    return (
      <FixedContainer>
        <FixedFormWrapper>
          <PageTitle>Update Password</PageTitle>
          <Wrapper>
            <Message>
              <Alert type="error" message="Sorry! Link expired!" />
            </Message>
          </Wrapper>
        </FixedFormWrapper>
      </FixedContainer>
    );
  }
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Update Password</PageTitle>
        <Wrapper>
          <Formik
            initialValues={{
              email: _get(decoded, "email", ""),
              password: "",
              passwordConfirm: "",
              token
            }}
            validationSchema={UpdatePasswordSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setError("");
              setSuccess("");
              return authActions
                .updatePassword(values)
                .then(() => {
                  setSubmitting(false);
                  resetForm({});
                  setSuccess(
                    "Your password has been successfully changed, thank you!"
                  );
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
                  disabled
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
                  UPDATE PASSWORD
                </Button>
                <AuthNavLinks>
                  <Link to="login">
                    {" "}
                    <Icon name="arrow_back" /> Back to Login
                  </Link>
                </AuthNavLinks>
                {success && <Alert type="success" message={success} />}
                {error && <Alert type="error" message={error} />}
              </form>
            )}
          </Formik>
        </Wrapper>
      </FixedFormWrapper>
    </FixedContainer>
  );
};

const Message = styled.div`
  & > div {
    padding: 16px;
  }
`;

export default ForgotPassword;
