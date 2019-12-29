import React, { useContext } from "react";
import styled from "styled-components";
import _get from "lodash/get";
import { NavLink } from "react-router-dom";
import { Store } from "../store";
import { commonActions } from "../store/actions";
import { Container } from "../styled/common";
import { Icon } from "./core";

const SidebarMenu = () => {
  const { state, dispatch } = useContext(Store);
  const isOpen = _get(state, "common.isMenuOpen", false);
  return (
    <MenuContainer
      isOpen={isOpen}
      onClick={() => commonActions.toggleMenu(dispatch)}
    >
      <Container>
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
      </Container>
    </MenuContainer>
  );
};

const MenuContainer = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "100%" : 0)};
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.33);
  overflow-x: hidden;
  transition: 300ms;
  ${Container} {
    max-width: 280px;
    height: 100%;
    background: #232323;
    position: relative;
    padding: 32px 0;
    ul {
      li {
        a {
          display: block;
          padding: 8px 16px;
        }
      }
    }
  }
`;

export default SidebarMenu;
