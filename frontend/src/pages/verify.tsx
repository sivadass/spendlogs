import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import _get from "lodash/get";
import styled from "styled-components";
import { authActions } from "../store/actions";
import { Alert } from "../components/core";
import Spinner from "../components/core/form-controls/spinner";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper
} from "../styled/common";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  let query = useQuery();
  const token = query.get("token") || "";
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const verifyToken = () => {
    setLoading(true);
    return authActions
      .verifyEmail(token)
      .then((d: any) => {
        setLoading(false);
        setSuccess(_get(d, "data", ""));
      })
      .catch((err: any) => {
        setLoading(false);
        if (_get(err, "name") === "JsonWebTokenError") {
          setError("Sorry, invalid token!");
        } else {
          setError("Oops, an unknown error occurred!");
        }
      });
  };
  useEffect(() => {
    verifyToken();
  }, [token]);
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Email Verification</PageTitle>
        <Wrapper>
          {loading && <Spinner block />}
          <Message>
            {success && <Alert type="success" message={success} />}
            {error && <Alert type="error" message={error} />}
          </Message>
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

export default Verify;
