import React, { useContext, useEffect } from "react";
import { useParams, useHistory, RouteProps } from "react-router-dom";
import styled from "styled-components";
import _get from "lodash/get";
import { Store } from "../store";
import {
  FixedContainer,
  Wrapper,
  PageHeader,
  PageActions
} from "../styled/common";
import Icon from "../components/core/icon";
import { expenseActions, actionTypes } from "../store/actions";
import Spinner from "../components/core/form-controls/spinner";
import { Button } from "../components/core";
import BreadCrumbs from "../components/breadcrumbs";
import SettingsForm from "../components/form/settings";

type IProps = RouteProps;

const Settings: React.FC<IProps> = () => {
  let { id = "" } = useParams();
  let history = useHistory();
  const { state, dispatch } = useContext(Store);
  const getDetails = () => {
    dispatch({ type: actionTypes.EXPENSE_DETAILS_REQUEST, payload: {} });
    return expenseActions
      .getExpenseDetails(id)
      .then((d: any) => {
        dispatch({
          type: actionTypes.EXPENSE_DETAILS_SUCCESS,
          payload: _get(d, "data", {})
        });
      })
      .catch((err: any) => {
        dispatch({
          type: actionTypes.EXPENSE_DETAILS_FAILURE,
          payload: err.message
        });
      });
  };
  const deleteExpense = () => {
    dispatch({ type: actionTypes.EXPENSE_DELETE_REQUEST, payload: {} });
    return expenseActions
      .deleteExpense(id)
      .then((d: any) => {
        dispatch({
          type: actionTypes.EXPENSE_DELETE_SUCCESS,
          payload: _get(d, "data", {})
        });
        history.push(`/expense`);
      })
      .catch((err: any) => {
        dispatch({
          type: actionTypes.EXPENSE_DELETE_FAILURE,
          payload: err.message
        });
      });
  };

  const goToEdit = () => {
    history.push(`/expense/${id}/edit`);
  };
  useEffect(() => {
    getDetails();
  }, [id]);

  if (_get(state, "expense.details.loading")) {
    return (
      <FixedContainer>
        <Spinner block />
      </FixedContainer>
    );
  }
  return (
    <FixedContainer>
      <PageHeader>
        <BreadCrumbs
          links={[
            { name: "Dashboard", url: "/" },
            { name: "Settings", url: "" }
          ]}
        />
        <PageActions />
      </PageHeader>
      <Wrapper>
        <SettingsForm
          initialValues={{
            name: "Sivadass",
            email: "hi@123.com"
          }}
          handleFormSubmit={() => {}}
        />
      </Wrapper>
    </FixedContainer>
  );
};

const MediaObject = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const MediaObjectFigure = styled.div`
  margin-right: 8px;
  i {
    margin-right: 8px;
    background: #f5f7f9;
    color: #94aab9;
    margin-right: 16px;
    display: block;
    padding: 12px;
    height: 48px;
    width: 48px;
    border-radius: 24px;
  }
`;

const MediaObjectBody = styled.div`
  flex: 1;
  h4 {
    font-size: 14px;
    line-height: 18px;
    color: #666;
  }
  p {
    font-size: 12px;
    color: #999;
    img {
      display: block;
      width: 100%;
      padding: 0;
      border: 1px solid #f7f7f7;
      margin: 8px 0 0 0;
      border-radius: 6px;
      max-width: 600px;
    }
  }
`;

export default Settings;
