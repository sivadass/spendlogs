import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../../store";
import { actionTypes, expenseActions } from "../../store/actions";
import { Alert, Button, FormControl } from "../../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper
} from "../../styled/common";
import { EXPENSE_CATEGORIES } from "../../constants/common";

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
  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Add Expense</PageTitle>
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
              console.log("expense form values...", values);
              setError("");
              return expenseActions
                .addExpense(values)
                .then(d => {
                  setSubmitting(false);
                  history.push(`/expense/${d.data.id}/details`);
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
                  placeholder="Payee"
                  type="text"
                  name="payee"
                  component={FormControl.Input}
                />
                <Field
                  placeholder="Amount"
                  type="number"
                  name="amount"
                  component={FormControl.Input}
                />
                <Field
                  placeholder="Category"
                  name="categoryId"
                  component={FormControl.Select}
                  options={EXPENSE_CATEGORIES}
                />
                <Field
                  placeholder="Comment"
                  name="comment"
                  component={FormControl.TextArea}
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
                  <Alert message="Job successfully created!" type="success" />
                )}
                {error && <Alert message={error} type="error" />}
              </form>
            )}
          </Formik>
        </Wrapper>
      </FixedFormWrapper>
    </FixedContainer>
  );
};

export default AddExpense;
