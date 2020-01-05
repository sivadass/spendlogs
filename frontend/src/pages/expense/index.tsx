import React, { useEffect, useContext } from "react";
import _get from "lodash/get";
import { Store } from "../../store";
import { expenseActions, actionTypes } from "../../store/actions";
import ExpenseList from "../../components/expense-list";
import PageHeader from "../../components/page-header";
import { FixedContainer, PageTitle, Wrapper } from "../../styled/common";

const AllExpenseList = () => {
  const { state, dispatch } = useContext(Store);
  const getExpenses = () => {
    dispatch({ type: actionTypes.EXPENSES_REQUEST, payload: {} });
    return expenseActions
      .getExpenses()
      .then((d: any) => {
        dispatch({
          type: actionTypes.EXPENSES_SUCCESS,
          payload: _get(d, "data", [])
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.EXPENSES_FAILURE,
          payload: err.message
        });
      });
  };
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <FixedContainer>
      <PageHeader title="My Expenses" />
      <Wrapper>
        <ExpenseList
          data={_get(state, "expense.list.data")}
          loading={_get(state, "expense.list.loading")}
        />
      </Wrapper>
    </FixedContainer>
  );
};

export default AllExpenseList;
