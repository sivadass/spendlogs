import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const { state, dispatch } = useContext(Store);
  let query = useQuery();
  const token = query.get("token");
  console.log("token", token);
  const [error, setError] = useState("");
  useEffect(() => {
    if (token) authActions.verifyEmail(token);
  }, [token]);
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Verify</PageTitle>
        <Wrapper>
          <p>Please wait...</p>
        </Wrapper>
      </FixedFormWrapper>
    </FixedContainer>
  );
};

export default Verify;
