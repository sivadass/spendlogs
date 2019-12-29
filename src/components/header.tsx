import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "./core";
import { FixedContainer } from "../styled/common";
import IMG_LOGO from "../assets/images/expense-manager-white-logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <FixedContainer>
        <NavLink to="/" exact>
          <Logo src={IMG_LOGO} alt="Expense Manager" />
        </NavLink>

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
    align-items: center;
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

const Logo = styled.img`
  display: block;
  max-width: 210px;
`;

export default Header;
