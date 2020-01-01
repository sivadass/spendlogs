import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import Spinner from "./form-controls/spinner";

interface ButtonProps {
  children: any;
  className?: string;
  onClick: (e: any) => any;
  loading: boolean;
  disabled: boolean;
  type: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  loading = false,
  disabled = false,
  type = "button"
}) => {
  return (
    <StyledButton
      className={classNames("button", className)}
      onClick={e => onClick(e)}
      disabled={disabled}
      type={type}
    >
      {loading && <Spinner loading={loading} />}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: inherit;
  height: 44px;
  padding: 0 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 100%;
  background: #377ef9;
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
  border-color: transparent;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
