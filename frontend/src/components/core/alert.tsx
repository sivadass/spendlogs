import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "./icon";

interface AlertProps {
  message: string;
  type: "info" | "warning" | "success" | "error";
}

const Alert: React.FC<AlertProps> = ({ message, type = "info" }) => {
  const getIcon = (alertType: AlertProps["type"]) => {
    switch (alertType) {
      case "info":
        return "info";
      case "warning":
        return "warning";
      case "error":
        return "highlight_off";
      case "success":
        return "check_circle";
      default:
        return "error";
    }
  };
  return (
    <AlertContainer type={type} role="alert">
      <Icon name={getIcon(type)} /> {message}
    </AlertContainer>
  );
};

export const fadeInUp = keyframes`
  from {
      opacity: 0;
      -webkit-transform: translate3d(0, 25%, 0);
      transform: translate3d(0, 25%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
`;

const AlertContainer = styled.div<{ type: AlertProps["type"] }>`
  border: 1px solid transparent;
  margin-bottom: 16px;
  margin-top: 16px;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  animation-name: ${fadeInUp};
  animation-duration: 400ms;
  animation-fill-mode: both;
  display: flex;
  i {
    margin-right: 8px;
    opacity: 0.33;
    vertical-align: middle;
  }
  ${props =>
    props.type === "info" &&
    `
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  `}
  ${props =>
    props.type === "warning" &&
    `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}
  ${props =>
    props.type === "success" &&
    `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `}
  ${props =>
    props.type === "error" &&
    `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`;

export default Alert;
