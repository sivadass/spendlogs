import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import _get from "lodash/get";
import moment from "moment";
import { Icon } from "./core";
import Spinner from "./core/form-controls/spinner";
import EmptyState from "./empty-state";
import { Wrapper } from "../styled/common";
import { formatAmount } from "../utils/common";

export interface ExpenseItemData {
  id: string;
  amount: number;
  comment: string;
  payee: string;
  paidOn: Date;
  category: {
    value: string;
    label: string;
    icon: string;
    color: string;
  };
  createdOn: string;
  updatedOn: string;
}

export interface ExpenseListProps {
  data: ExpenseItemData[];
  loading?: boolean;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ data, loading = false }) => {
  if (loading) {
    return (
      <Wrapper>
        <Spinner block />
      </Wrapper>
    );
  }
  if (!loading && data.length === 0) {
    return (
      <EmptyState
        title="No Expenses found!"
        message="When you add new expenses, it will be listed here."
        icon="receipt"
      />
    );
  }
  return (
    <Wrapper>
      {data &&
        data.map(expense => {
          return (
            <ExpenseListItem key={expense.id}>
              <Link to={`expense/${expense.id}`}>
                <CategoryIcon>
                  <Icon name={_get(expense, "category.icon", "post_add")} />
                </CategoryIcon>
                <ExpenseDetails>
                  <Wrapper>
                    <h6>{_get(expense, "payee", "")}</h6>
                    <p>
                      <span>
                        {moment(expense.paidOn).format("h:mm a, MMM D")}
                      </span>
                      <span>
                        {_get(expense, "category.name", "Uncategorized")}
                      </span>
                    </p>
                  </Wrapper>
                </ExpenseDetails>
                <ExpenseDescription>
                  <p>{expense.comment}</p>
                </ExpenseDescription>
                <ExpenseAmount>
                  <h4>{formatAmount(expense.amount)}</h4>
                </ExpenseAmount>
              </Link>
            </ExpenseListItem>
          );
        })}
    </Wrapper>
  );
};

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

const ExpenseListItem = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    color: #999;
    background-image: #fff;
    transition: all 300ms ease-in;
    &:hover {
      text-decoration: none;
      background-image: linear-gradient(
        141deg,
        rgba(100, 194, 172, 0.12941176470588237) 0%,
        rgba(160, 221, 157, 0.2901960784313726) 75%
      );
      border-bottom-color: transparent;
    }
  }
`;

const ExpenseDetails = styled.div`
  flex-grow: 1;
  overflow: hidden;
  max-width: 300px;
  ${Wrapper} {
    margin-left: 16px;
    width: 100%;
    h6 {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #666;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      color: #999;
      text-overflow: ellipsis;
      span:nth-child(2) {
        color: red;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 12px;
        background: #ddd;
        margin-left: 8px;
        color: #666;
        @media (max-width: 480px) {
          display: none;
        }
      }
    }
  }
`;
const ExpenseAmount = styled.div`
  width: 132px;
  flex-shrink: 0;
  h4 {
    color: #232323;
    text-align: right;
    line-height: 44px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 16px;
  }
  @media (max-width: 480px) {
    width: 120px;
    h4 {
      font-size: 16px;
    }
  }
`;

export const ExpenseDescription = styled.div`
  flex-grow: 2;
  overflow: hidden;
  max-width: 600px;
  p {
    line-height: 44px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export default ExpenseList;
