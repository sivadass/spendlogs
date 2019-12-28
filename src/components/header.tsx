import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FixedContainer } from "../styled/common";

const Header = () => {
  return (
    <StyledHeader>
      <FixedContainer>
        <h1>Expense Manager</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </FixedContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #4099ff;
  padding: 16px 0;
  color: #fff;
  ${FixedContainer} {
    display: flex;
    justify-content: space-between;
  }
  nav {
    ul {
      li {
        display: inline-block;
      }
    }
    a {
      color: #fff;
      padding: 4px 16px;
      &.active {
        background: rgba(255, 255, 255, 0.33);
      }
    }
  }
`;

export default Header;
