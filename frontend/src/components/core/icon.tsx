import React from "react";
import { MaterialIcon } from "../../styled/common";

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <MaterialIcon>{name}</MaterialIcon>;
};

export default Icon;
