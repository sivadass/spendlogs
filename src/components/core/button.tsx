import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyledButton>I am a button</StyledButton>;
};

const StyledButton = styled.button`
  text-align: center;
  color: #999;
  padding: 16px 0;
`;

export default Button;
