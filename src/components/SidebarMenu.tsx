import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <MenuContainer>
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
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  max-width: 320px;
  background: #f7f7f7;
`;

export default SidebarMenu;
