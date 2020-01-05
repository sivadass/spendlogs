import React, { useContext, useEffect } from "react";
import { Link, useParams, RouteProps } from "react-router-dom";
import styled from "styled-components";
import _get from "lodash/get";
import moment from "moment";
import { Store } from "../../store";
import { FixedContainer, Wrapper } from "../../styled/common";
import Icon from "../../components/core/icon";
import PageHeader from "../../components/page-header";
import { formatAmount } from "../../utils/common";
import { expenseActions, actionTypes } from "../../store/actions";
import Spinner from "../../components/core/form-controls/spinner";

type IProps = RouteProps;

const ExpenseDetails: React.FC<IProps> = () => {
  let { id = "" } = useParams();
  const { state, dispatch } = useContext(Store);
  const getDetails = () => {
    dispatch({ type: actionTypes.EXPENSE_DETAILS_REQUEST, payload: {} });
    return expenseActions
      .getExpenseDetails(id)
      .then((d: any) => {
        dispatch({
          type: actionTypes.EXPENSE_DETAILS_SUCCESS,
          payload: _get(d, "data", [])
        });
      })
      .catch((err: any) => {
        dispatch({
          type: actionTypes.EXPENSE_DETAILS_FAILURE,
          payload: err.message
        });
      });
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
      <PageHeader title="Details" />
      <Wrapper>
        <Amount>
          {formatAmount(_get(state, "expense.details.data.amount", 0))}
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
            <Icon name="public" />
          </MediaObjectFigure>
          <MediaObjectBody>
            <h4>Internet</h4>
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
              <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg" />
            </p>
          </MediaObjectBody>
        </MediaObject>
        <Actions>
          <li>
            <Link to="/expense/add">
              <Icon name="add_circle_outline" /> Add New
            </Link>
          </li>
          <li>
            <Link to="/expense/123/edit">
              <Icon name="edit" /> Edit
            </Link>
          </li>
          <li>
            <a onClick={() => {}}>
              <Icon name="delete_outline" /> Delete
            </a>
          </li>
        </Actions>
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
    a {
      line-height: 20px;
      display: block;
      padding: 8px;
      background: #f5f5f5;
      border-radius: 4px;
      margin-left: 16px;
      &:hover {
        text-decoration: none;
      }
      i {
        margin-right: 4px;
        font-size: 20px;
      }
    }
  }
`;

export default ExpenseDetails;
