import React, { useContext } from "react";
import _get from "lodash/get";
import SidebarMenu from "./components/SidebarMenu";
import { Store } from "./store";
import { Container } from "./styled/common";
import { actionTypes } from "./store/actions";

interface PrivateLayoutProps {
  children: any;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  return (
    <Container>
      {_get(state, "common.isMenuOpen") && <SidebarMenu />}
      <div>{children}</div>
    </Container>
  );
};

export default PrivateLayout;
