import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledAlert>
      <p>Message here</p>
    </StyledAlert>
  );
};

const StyledAlert = styled.div`
  text-align: center;
  color: #999;
  padding: 16px 0;
`;

export default Footer;
