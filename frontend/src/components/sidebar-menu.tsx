import React, { useContext } from "react";
import styled from "styled-components";
import _get from "lodash/get";
import { NavLink, useHistory } from "react-router-dom";
import { Store } from "../store";
import { commonActions, authActions } from "../store/actions";
import { Container } from "../styled/common";
import { useServiceWorker } from "../hooks/useServiceWorker";
import { Icon, Button } from "./core";

const SidebarMenu = () => {
  const history = useHistory();
  // @ts-ignore
  const { isUpdateAvailable, updateAssets } = useServiceWorker();
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
        {isUpdateAvailable && (
          <UpdateMessage>
            <p>New version of this app is available!</p>
            <Button onClick={updateAssets}>
              <Icon name="sync" /> Update now
            </Button>
          </UpdateMessage>
        )}
        <WelcomeMessage>Hey {_get(state, "auth.user.name", "")}</WelcomeMessage>
        <ul>
          {_get(state, "auth.isAuthenticated", false) ? (
            <>
              <li>
                <NavLink to="/" exact>
                  <Icon name="speed" /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/expense">
                  <Icon name="receipt" /> My Expenses
                </NavLink>
              </li>
              <li>
                <NavLink to="/category">
                  <Icon name="style" /> My Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/expense/add">
                  <Icon name="add_circle_outline" /> Add Expense
                </NavLink>
              </li>
              <li>
                <a href="#" onClick={(e: any) => logout(e)}>
                  <Icon name="exit_to_app" /> Logout
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

const UpdateMessage = styled.div`
  padding: 24px;
  background: #fbfaee;
  margin: 0 0 32px 0;
  min-height: 122px;
  width: 100%;
  p {
    font-size: 14px;
    margin-bottom: 16px;
    padding: 0 !important;
    line-height: 14px;
    color: #232323 !important;
  }
  button {
    i {
      margin-right: 8px;
    }
  }
`;

const WelcomeMessage = styled.p`
  padding: 32px 16px 24px 16px !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.052);
`;

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
  ${UpdateMessage} {
    transition: opacity 300ms ease-in;
    transition-delay: 600mx;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  }
  ${Container} {
    max-width: ${({ isOpen }) => (isOpen ? "280px" : 0)};
    height: 100%;
    background-color: #06537b;
    position: relative;
    padding: 0;
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
          transition-delay: 100ms;
        }
        &:nth-child(3) {
          transition-delay: 200ms;
        }
        &:nth-child(4) {
          transition-delay: 300ms;
        }
        &:nth-child(5) {
          transition-delay: 400ms;
        }
        &:nth-child(6) {
          transition-delay: 5000ms;
        }
        a {
          display: block;
          padding: 12px 16px;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.052);
          i {
            margin-right: 12px;
            opacity: 0.45;
          }
        }
      }
    }
  }
`;

export default SidebarMenu;
