import React, { useContext } from "react";
import styled from "styled-components";
import _get from "lodash/get";
import { NavLink, useHistory } from "react-router-dom";
import { Store } from "../store";
import { commonActions, authActions } from "../store/actions";
import { Container } from "../styled/common";
import { Icon } from "./core";

const SidebarMenu = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const isOpen = _get(state, "common.isMenuOpen", false);

  const logout = (e: any) => {
    e.preventDefault();
    authActions.logout(dispatch);
    history.push("/login");
  };

  return (
    <MenuContainer
      isOpen={isOpen}
      onClick={() => commonActions.toggleMenu(dispatch)}
    >
      <Container>
        <p>Hey {_get(state, "auth.user.name", "")}</p>
        <ul>
          {_get(state, "auth.isAuthenticated", false) ? (
            <>
              <li>
                <NavLink to="/" exact>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/expense">My Expenses</NavLink>
              </li>
              <li>
                <NavLink to="/expense/add">Add Expense</NavLink>
              </li>
              <li>
                <a href="#" onClick={(e: any) => logout(e)}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </Container>
    </MenuContainer>
  );
};

const MenuContainer = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "100%" : 0)};
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  overflow-x: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 300ms ease-in;
  ${Container} {
    max-width: ${({ isOpen }) => (isOpen ? "280px" : 0)};
    height: 100%;
    background-color: #1fc8db;
    background-image: linear-gradient(141deg, #06537b 0%, #70afc1 75%);
    position: relative;
    padding: 32px 0;
    transition-delay: 300ms;
    transition: all 300ms ease-in;
    p {
      padding: 8px 16px;
      color: rgba(255, 255, 255, 0.25);
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    }
    ul {
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      overflow: hidden;
      li {
        transform: ${({ isOpen }) =>
          isOpen ? "translateX(0%)" : "translateX(-100%)"};
        transition: transform 0.5s, opacity 2s;
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        &:nth-child(1) {
          transition-delay: 0ms;
        }
        &:nth-child(2) {
          transition-delay: 200ms;
        }
        &:nth-child(3) {
          transition-delay: 400ms;
        }
        &:nth-child(4) {
          transition-delay: 600ms;
        }
        &:nth-child(5) {
          transition-delay: 800ms;
        }
        &:nth-child(6) {
          transition-delay: 1000ms;
        }
        a {
          display: block;
          padding: 8px 16px;
          color: #fff;
        }
      }
    }
  }
`;

export default SidebarMenu;
