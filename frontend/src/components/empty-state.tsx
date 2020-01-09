import React from "react";
import styled from "styled-components";
import { Icon } from "./core";
import IMG_EMPTY_BACKAGROUND from "../assets/images/empty-background.svg";

interface EmptyStateProps {
  title: string;
  message?: string;
  icon?: string;
  size?: "small" | "default" | "big";
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message = "",
  icon = "insert_drive_file",
  size = "default"
}) => {
  return (
    <EmptyStateContainer size={size}>
      <Media>
        <Icon name={icon} />
      </Media>
      <h3>{title}</h3>
      {message && <p>{message}</p>}
    </EmptyStateContainer>
  );
};

const EmptyStateContainer = styled.div<{ size: EmptyStateProps["size"] }>`
  padding: 48px;
  text-align: center;
  h3 {
    margin-bottom: 16px;
    color: #666;
    font-weight: normal;
    font-size: 21px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #999;
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Media = styled.div`
  text-align: center;
  margin-bottom: 24px;
  display: block;
  color: #ddd;
  width: 200px;
  height: 176px;
  margin: 0 auto 36px auto;
  background: url(${IMG_EMPTY_BACKAGROUND}) center no-repeat;
  background-size: cover;
  opacity: 0.66;
  i {
    font-size: 70px;
    width: 70px;
    line-height: 176px;
    text-align: center;
    color: #6babbe;
  }
  @media (max-width: 480px) {
    width: 102px;
    height: 92px;
    i {
      font-size: 54px;
      width: 54px;
      line-height: 92px;
    }
  }
`;

export default EmptyState;
