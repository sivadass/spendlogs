import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Icon from "./core/icon";

function BackButton() {
  let history = useHistory();
  return (
    <BackBtn type="button" onClick={() => history.goBack()}>
      <Icon name="chevron_left" />
    </BackBtn>
  );
}

const BackBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  padding: 12px;
  text-align: center;
  border: none;
  display: inline-block;
  &:hover {
    background: #0a6b8a;
    color: #fff;
  }
`;

export default BackButton;
