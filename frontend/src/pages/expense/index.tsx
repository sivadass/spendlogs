import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import _get from "lodash/get";
import styled from "styled-components";
import moment from "moment";
import { Store } from "../../store";
import { expenseActions, actionTypes } from "../../store/actions";
import ExpenseList from "../../components/expense-list";
import ExpenseFilterForm from "../../components/form/expense-filter";
import BreadCrumbs from "../../components/breadcrumbs";
import { Button, Icon } from "../../components/core";
import Pagination from "../../components/pagination";
import {
  FixedContainer,
  PageHeader,
  FloatingActions,
  Wrapper
} from "../../styled/common";

const RESULTS_PER_PAGE = 10;

const AllExpenseList = () => {
  const { state, dispatch } = useContext(Store);
  const [page, setPage] = useState(1);
  const fromDate = _get(
    state,
    "expense.list.filters.to",
    moment()
      .subtract(1, "months")
      .endOf("month")
      .format()
  );
  const toDate = _get(
    state,
    "expense.list.filters.from",
    moment()
      .endOf("day")
      .format()
  );
  let history = useHistory();
  const getExpenses = (
    from: string,
    to: string,
    page: number = 1,
    limit: number
  ) => {
    dispatch({ type: actionTypes.EXPENSES_REQUEST, payload: {} });
    return expenseActions
      .getExpenses(from, to, page, limit)
      .then((d: any) => {
        dispatch({
          type: actionTypes.EXPENSES_SUCCESS,
          payload: _get(d, "data", {})
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.EXPENSES_FAILURE,
          payload: err.message
        });
      });
  };

  const handlePagination = (p: number) => {
    setPage(p);
    getExpenses("", "", p, RESULTS_PER_PAGE);
  };
  useEffect(() => {
    getExpenses(fromDate, toDate, 1, RESULTS_PER_PAGE);
  }, [fromDate, toDate]);
  const goToAddNew = () => {
    history.push(`/expense/add`);
  };
  return (
    <FixedContainer>
      <PageHeader>
        <BreadCrumbs
          links={[
            { name: "Dashboard", url: "/" },
            { name: "My Expenses", url: "" }
          ]}
        />
        <div />
      </PageHeader>
      <Wrapper>
        <ExpenseFilter>
          <ExpenseFilterForm
            initialValues={{
              from: fromDate,
              to: toDate
            }}
          />
        </ExpenseFilter>
        <ExpenseList
          data={_get(state, "expense.list.data")}
          loading={_get(state, "expense.list.loading")}
        />
        <Pagination
          total={_get(state, "expense.list.total", 0)}
          page={page}
          limit={10}
          onClick={handlePagination}
        />
        <FloatingActions>
          <ul>
            <li>
              <Button onClick={() => goToAddNew()} variant="floating">
                <Icon name="add_outline" />
              </Button>
            </li>
          </ul>
        </FloatingActions>
      </Wrapper>
    </FixedContainer>
  );
};

const ExpenseFilter = styled.div`
  display: flex;
  align-items: center;
  background: #f7f7f7;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 6px;
  select {
    max-width: 160px;
    margin-left: 16px;
    height: 36px;
  }
`;

export default AllExpenseList;
