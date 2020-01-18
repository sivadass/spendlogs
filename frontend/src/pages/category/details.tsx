import React, { useContext, useEffect } from "react";
import { useParams, useHistory, RouteProps } from "react-router-dom";
import styled from "styled-components";
import _get from "lodash/get";
import moment from "moment";
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
        <CategoryInfo>
          <p>Name</p>
          <h3>{_get(state, "category.details.data.name", "")}</h3>
        </CategoryInfo>
        <CategoryInfo>
          <p>Date Added On</p>
          <h3>
            {moment(_get(state, "category.details.data.createdAt", "")).format(
              "h:mm a, MMM D"
            )}
          </h3>
        </CategoryInfo>
        <CategoryInfo>
          <p>Last Updated On</p>
          <h3>
            {moment(_get(state, "category.details.data.updatedAt", "")).format(
              "h:mm a, MMM D"
            )}
          </h3>
        </CategoryInfo>
        <CategoryInfo>
          <p>Icon</p>
          <h3>
            <CategoryIcon>
              <Icon name={_get(state, "category.details.data.icon", "")} />
            </CategoryIcon>
          </h3>
        </CategoryInfo>
      </Wrapper>
    </FixedContainer>
  );
};

const CategoryInfo = styled.div`
  margin-bottom: 24px;
  p {
    font-size: 12px;
    line-height: 20px;
    color: #999;
  }
  h3 {
    font-size: 16px;
    line-height: 20px;
    color: #666;
    font-weight: 400;
  }
`;

const CategoryIcon = styled.div`
  flex-shrink: 0;
  height: 44px;
  width: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
  border: 1px solid transparent;
  transition: all 300ms ease-in;
  i {
    line-height: 44px;
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
