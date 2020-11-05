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
import { formatAmount, transformImageURL } from "../../utils/common";
import { expenseActions, actionTypes } from "../../store/actions";
import Spinner from "../../components/core/form-controls/spinner";
import { Button } from "../../components/core";
import BreadCrumbs from "../../components/breadcrumbs";
import Dropdown from "../../components/dropdown";
import IMG_EMPTY_BILL from "../../assets/images/empty-bill.png";

type IProps = RouteProps;

const ExpenseDetails: React.FC<IProps> = () => {
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
            { name: "My Expenses", url: "/expense" },
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
                  <Icon name="edit" /> Edit Expense
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
        <Amount>
          {formatAmount(
            _get(state, "expense.details.data.amount", 0),
            _get(state, "auth.user.language", "en-US"),
            _get(state, "auth.user.currency", "USD"),
            false
          )}
        </Amount>
        <MediaObject>
          <MediaObjectFigure>
            <Icon name="date_range" />
          </MediaObjectFigure>
          <MediaObjectBody>
            <h4>
              {moment(_get(state, "expense.details.data.paidOn", "")).format(
                "DD MMM YYYY, h:mm a"
              )}
            </h4>
            <p>8% Greater than last month</p>
          </MediaObjectBody>
        </MediaObject>

        <MediaObject>
          <MediaObjectFigure>
            <Icon
              name={_get(
                state,
                "expense.details.data.category.icon",
                "post_add"
              )}
            />
          </MediaObjectFigure>
          <MediaObjectBody>
            <h4>
              {_get(
                state,
                "expense.details.data.category.name",
                "Uncategorized"
              )}
            </h4>
            <p>5th Most spent category of this month</p>
          </MediaObjectBody>
        </MediaObject>

        <MediaObject>
          <MediaObjectFigure>
            <Icon name="chat" />
          </MediaObjectFigure>
          <MediaObjectBody>
            <h4>{_get(state, "expense.details.data.payee", "")}</h4>
            <p>{_get(state, "expense.details.data.comment", "")}</p>
          </MediaObjectBody>
        </MediaObject>

        <MediaObject>
          <MediaObjectFigure>
            <Icon name="attach_file" />
          </MediaObjectFigure>
          <MediaObjectBody>
            <h4>Bill</h4>
            <p>
              <img
                src={transformImageURL(
                  _get(state, "expense.details.data.attachment", "") ||
                    IMG_EMPTY_BILL
                )}
              />
            </p>
          </MediaObjectBody>
        </MediaObject>
      </Wrapper>
    </FixedContainer>
  );
};

const Amount = styled.div`
  font-size: 42px;
  line-height: 42px;
  margin-bottom: 36px;
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

const Actions = styled.ul`
  li {
    display: inline-block;
    button {
      i {
        margin-right: 8px;
      }
    }
  }
`;

export default ExpenseDetails;
