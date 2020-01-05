import React from "react";
import { Wrapper } from "./styled/common";

interface PrivateLayoutProps {
  children: any;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PrivateLayout;
