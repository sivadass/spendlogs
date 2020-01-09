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

export interface CategoryItemData {
  id: string;
  name: string;
  icon: string;
  updatedOn: string;
}

export interface CategoryListProps {
  data: CategoryItemData[];
  loading?: boolean;
}

const ExpenseList: React.FC<CategoryListProps> = ({
  data,
  loading = false
}) => {
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
        title="No Categories found!"
        message="When you create new categories, it will be listed here."
        icon="styles"
      />
    );
  }
  return (
    <Wrapper>
      {data &&
        data.map(category => {
          return (
            <ExpenseListItem key={category.id}>
              <Link to={`category/${category.id}`}>
                <CategoryIcon>
                  <Icon name={_get(category, "icon", "")} />
                </CategoryIcon>
                <CategoryName>
                  <p>{category.name}</p>
                </CategoryName>
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

export const CategoryName = styled.div`
  flex-grow: 1;
  overflow: hidden;
  max-width: 600px;
  p {
    line-height: 44px;
    padding-left: 16px;
  }
`;

export default ExpenseList;
