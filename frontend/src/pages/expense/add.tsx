import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../../store";
import {
  expenseActions,
  categoryActions,
  actionTypes
} from "../../store/actions";
import { Alert, Button, FormControl } from "../../components/core";
import {
  FixedContainer,
  PageHeader,
  Wrapper,
  FixedFormWrapper,
  PageActions
} from "../../styled/common";
import BreadCrumbs from "../../components/breadcrumbs";
import { getCategoryOptions } from "../../utils/common";

const ExpenseSchema = Yup.object().shape({
  amount: Yup.number()
    .min(1, "Should be greater than 1!")
    .max(100000000, "Too Long!")
    .required("Required"),
  payee: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  categoryId: Yup.string().required("Required"),
  comment: Yup.string()
    .min(4, "Too Short!")
    .max(250, "Too Long!")
});

const AddExpense = () => {
  const { state, dispatch } = useContext(Store);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const getCategories = () => {
    dispatch({ type: actionTypes.CATEGORIES_REQUEST, payload: {} });
    return categoryActions
      .getCategories()
      .then((d: any) => {
        dispatch({
          type: actionTypes.CATEGORIES_SUCCESS,
          payload: _get(d, "data", [])
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.CATEGORIES_FAILURE,
          payload: err.message
        });
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  const categoryOptions = getCategoryOptions(_get(state, "category.list.data"));
  return (
    <FixedContainer>
      <PageHeader>
        <BreadCrumbs
          links={[
            { name: "My Expenses", url: "/expense" },
            { name: "Add New", url: "" }
          ]}
        />
        <PageActions />
      </PageHeader>
      <Wrapper>
        <Formik
          initialValues={{
            amount: "",
            payee: "",
            categoryId: "",
            comment: ""
          }}
          validationSchema={ExpenseSchema}
          onSubmit={(values, { setSubmitting }) => {
            setError("");
            return expenseActions
              .addExpense(values)
              .then(d => {
                setSubmitting(false);
                setSuccess(true);
                history.push(`/expense/${d.data.id}`);
              })
              .catch(err => {
                setSubmitting(false);
                setError(err);
              });
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Field
                placeholder="Amount"
                type="number"
                name="amount"
                label="Amount"
                component={FormControl.Input}
              />
              <Field
                placeholder="Payee"
                type="text"
                name="payee"
                label="Payee"
                component={FormControl.Input}
              />
              <Field
                placeholder="Category"
                name="categoryId"
                component={FormControl.Select}
                options={categoryOptions}
                label="Category"
              />
              <Field
                placeholder="Comment"
                name="comment"
                component={FormControl.TextArea}
                label="Comments"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {}}
                loading={isSubmitting}
              >
                SAVE
              </Button>
              {success && (
                <Alert message="Successfully saved!" type="success" />
              )}
              {error && <Alert message={error} type="error" />}
            </form>
          )}
        </Formik>
      </Wrapper>
    </FixedContainer>
  );
};

export default AddExpense;
