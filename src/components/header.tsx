import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "./core";
import { Store } from "../store";
import { commonActions } from "../store/actions";
import { FixedContainer, Wrapper } from "../styled/common";
import IMG_LOGO from "../assets/images/expense-manager-white-logo.svg";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <StyledHeader>
      <FixedContainer>
        <Wrapper>
          <MenuButton onClick={() => commonActions.toggleMenu(dispatch)}>
            <Icon name="menu" />
          </MenuButton>
          <NavLink to="/" exact>
            <Logo src={IMG_LOGO} alt="Expense Manager" />
          </NavLink>
        </Wrapper>
        <NavLink to="/search">
          <SearchButton>
            <Icon name="search" />
          </SearchButton>
        </NavLink>
      </FixedContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #4099ff;
  padding: 8px 0;
  color: #fff;
  & > ${FixedContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${Wrapper} {
    display: flex;
    align-items: center;
  }
  i {
    color: #fff;
    vertical-align: middle;
  }
`;

const Logo = styled.img`
  display: block;
  max-width: 210px;
  @media (max-width: 360px) {
    max-width: 194px;
  }
`;

const MenuButton = styled.button`
  display: block;
  margin-right: 16px;
  background: transparent;
  padding: 0 12px;
  &:hover {
    border-radius: 24px;
    background: rgba(14, 125, 251, 0.5803921568627451);
    i {
      color: #fff;
    }
  }
`;

const SearchButton = styled.button`
  display: block;
  margin-left: 16px;
  width: 48px;
  background: transparent;
  padding: 0 12px;
  &:hover {
    border-radius: 24px;
    background: rgba(14, 125, 251, 0.5803921568627451);
    i {
      color: #fff;
    }
  }
`;

export default Header;
