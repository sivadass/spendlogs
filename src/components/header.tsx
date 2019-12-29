import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "./core";
import { FixedContainer } from "../styled/common";

const Header = () => {
  return (
    <StyledHeader>
      <FixedContainer>
        <NavLink to="/" exact>
          <h1>
            <Icon name="receipt" /> Expenses
          </h1>
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
  h1 {
    color: #fff;
    line-height: 36px;
    font-size: 24px;
    i {
      font-size: 36px;
      line-height: 36px;
      vertical-align: middle;
      margin-right: 4px;
    }
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
