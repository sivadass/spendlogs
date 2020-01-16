import React from "react";
import styled from "styled-components";
import Spinner from "./form-controls/spinner";

interface ButtonProps {
  children: any;
  onClick: (e: any) => any;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "default" | "primary" | "secondary" | "floating";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  type = "button",
  variant = "primary"
}) => {
  return (
    <StyledButton
      onClick={e => onClick(e)}
      disabled={disabled}
      type={type}
      variant={variant}
    >
      {loading && (
        <Spinner size={24} color={variant === "primary" ? "#fff" : "#0a6b8a"} />
      )}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: string }>`
  font-size: inherit;
  height: 44px;
  padding: 0 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 100%;
  border-color: transparent;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  ${props =>
    props.variant === "default" &&
    `
    color: #0a6b8a;
    background-color: 0a6b8a;
    border-color: #transparent;
  `}
  ${props =>
    props.variant === "primary" &&
    `
    color: #fff;
    background-color: #64c2ac;
    background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
  `}
  ${props =>
    props.variant === "secondary" &&
    `
    color: #0a6b8a;
    background-color: #fff;
    border-color: #0a6b8a;
  `}
  ${props =>
    props.variant === "floating" &&
    `
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 24px;
    color: #fff;
    background-color: #64c2ac;
    background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
    i {
      font-size: 32px;
      width: 32px;
      line-height: 48px;
    }
  `}
`;

export default Button;
