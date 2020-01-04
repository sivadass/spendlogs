import React from "react";
import styled from "styled-components";
import BackButton from "./back-button";
import { PageTitle } from "../styled/common";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Container>
      <BackButton />
      <h3>{title}</h3>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 0 16px 0;
  color: #999;
  display: flex;
  align-items: center;
  button {
    margin-right: 16px;
  }
  h3 {
    font-size: 20px;
    font-weight: normal;
  }
`;

export default PageHeader;
