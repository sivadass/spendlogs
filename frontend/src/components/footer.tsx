import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; 2020 <a href="https://spendlogs.ml">SpendLogs</a> by{" "}
        <a href="https://sivadass.in">Sivadass</a> {" | "}
        <a href="https://github.com/sivadass/spendlogs">Github</a>
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
  color: #999;
  padding: 16px 0;
  p {
    font-size: 14px;
    a {
      color: #66c2aa;
    }
  }
`;

export default Footer;
