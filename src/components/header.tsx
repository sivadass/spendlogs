import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Expense Manager</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #4099ff;
  padding: 16px 0;
  color: #fff;
`;

export default Header;
