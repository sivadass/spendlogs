import React, { useEffect, useContext } from "react";
import _get from "lodash/get";
import { Link, useHistory } from "react-router-dom";
import { Store } from "../../store";
import { expenseActions, actionTypes } from "../../store/actions";
import ExpenseList from "../../components/expense-list";
import BreadCrumbs from "../../components/breadcrumbs";
import { Button, Icon } from "../../components/core";
import {
  FixedContainer,
  PageHeader,
  PageActions,
  Wrapper
} from "../../styled/common";

const AllCategoriesList = () => {
  const { state, dispatch } = useContext(Store);
  let history = useHistory();
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
  const goToAddNew = () => {
    history.push(`/category/add`);
  };
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <FixedContainer>
      <PageHeader>
        <BreadCrumbs
          links={[
            { name: "Dashboard", url: "/" },
            { name: "My Categories", url: "" }
          ]}
        />
        <PageActions>
          <ul>
            <li>
              <Button onClick={() => goToAddNew()} variant="primary">
                <Icon name="add_circle_outline" /> Add New
              </Button>
            </li>
          </ul>
        </PageActions>
      </PageHeader>
      <Wrapper>
        <ExpenseList
          data={_get(state, "expense.list.data")}
          loading={_get(state, "expense.list.loading")}
        />
      </Wrapper>
    </FixedContainer>
  );
};

export default AllCategoriesList;
