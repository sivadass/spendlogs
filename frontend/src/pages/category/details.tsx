import React, { useContext, useEffect } from "react";
import { Link, useParams, useHistory, RouteProps } from "react-router-dom";
import styled from "styled-components";
import _get from "lodash/get";
import { Store } from "../../store";
import {
  FixedContainer,
  Wrapper,
  PageHeader,
  PageActions
} from "../../styled/common";
import Icon from "../../components/core/icon";
import { categoryActions, actionTypes } from "../../store/actions";
import Spinner from "../../components/core/form-controls/spinner";
import { Button } from "../../components/core";
import BreadCrumbs from "../../components/breadcrumbs";
import Dropdown from "../../components/dropdown";

type IProps = RouteProps;

const ExpenseDetails: React.FC<IProps> = () => {
  let { id = "" } = useParams();
  let history = useHistory();
  const { state, dispatch } = useContext(Store);
  const getDetails = () => {
    dispatch({ type: actionTypes.CATEGORY_DETAILS_REQUEST, payload: {} });
    return categoryActions
      .getCategoryDetails(id)
      .then((d: any) => {
        dispatch({
          type: actionTypes.CATEGORY_DETAILS_SUCCESS,
          payload: _get(d, "data", {})
        });
      })
      .catch((err: any) => {
        dispatch({
          type: actionTypes.CATEGORY_DETAILS_FAILURE,
          payload: err.message
        });
      });
  };
  const deleteExpense = () => {
    dispatch({ type: actionTypes.CATEGORY_DELETE_REQUEST, payload: {} });
    return categoryActions
      .deleteCategory(id)
      .then((d: any) => {
        dispatch({
          type: actionTypes.CATEGORY_DELETE_SUCCESS,
          payload: _get(d, "data", {})
        });
        history.push(`/category`);
      })
      .catch((err: any) => {
        dispatch({
          type: actionTypes.CATEGORY_DELETE_FAILURE,
          payload: err.message
        });
      });
  };

  const goToEdit = () => {
    history.push(`/category/${id}/edit`);
  };
  useEffect(() => {
    getDetails();
  }, [id]);

  if (_get(state, "category.details.loading")) {
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
            { name: "My Categories", url: "/category" },
            { name: "Details", url: "" }
          ]}
        />
        <PageActions>
          <ul>
            <li>
              <Dropdown
                trigger={
                  <Button onClick={() => {}} variant="default">
                    <Icon name="more_vert" />
                  </Button>
                }
              >
                <Button onClick={() => goToEdit()} variant="default">
                  <Icon name="edit" /> Edit
                </Button>
                <Button
                  variant="default"
                  onClick={() => deleteExpense()}
                  loading={_get(state, "expense.details.deleting", false)}
                >
                  {_get(state, "expense.details.deleting", false) ? (
                    "Deleting"
                  ) : (
                    <>
                      <Icon name="delete_outline" /> Delete
                    </>
                  )}
                </Button>
              </Dropdown>
            </li>
          </ul>
        </PageActions>
      </PageHeader>
      <Wrapper>
        <CategoryName>
          {_get(state, "category.details.data.name", "")}
        </CategoryName>
        <CategoryIcon>
          <Icon name={_get(state, "category.details.data.icon", "")} />
        </CategoryIcon>
      </Wrapper>
    </FixedContainer>
  );
};

const CategoryName = styled.div`
  font-size: 42px;
  line-height: 42px;
  margin-bottom: 36px;
`;

const CategoryIcon = styled.div`
  margin-bottom: 36px;
  i {
    font-size: 42px;
    line-height: 42px;
  }
`;

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

export default ExpenseDetails;
