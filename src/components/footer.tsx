import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; 2020{" "}
        <a href="https://sivadass.github.io/spendlogs/">SpendLogs</a> by{" "}
        <a href="https://sivadass.in">Sivadass</a>
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
  color: #999;
  padding: 16px 0;
`;

export default Footer;
