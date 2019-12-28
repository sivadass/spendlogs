import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; 2020 <a href="#">Expense Manager</a>
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
