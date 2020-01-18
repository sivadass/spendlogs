import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import _pick from "lodash/pick";
import { Store } from "../../store";
import {
  expenseActions,
  categoryActions,
  actionTypes
} from "../../store/actions";
import { Alert, Button, FormControl } from "../../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper
} from "../../styled/common";
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

const EditExpense = () => {
  const { state, dispatch } = useContext(Store);
  let { id = "" } = useParams();
  let history = useHistory();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const categoryOptions = getCategoryOptions(_get(state, "category.list.data"));
  const getCategories = () => {
    dispatch({ type: actionTypes.CATEGORIES_REQUEST, payload: {} });
    return categoryActions
      .getCategories()
      .then((d: any) => {
        console.log(d);
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

  return (
    <FixedContainer>
      <FixedFormWrapper>
        <PageTitle>Edit Expense</PageTitle>
        <Wrapper>
          <Formik
            initialValues={_pick(_get(state, "expense.details.data"), [
              "amount",
              "payee",
              "categoryId",
              "comment",
              "attachment",
              "paidOn"
            ])}
            validationSchema={ExpenseSchema}
            onSubmit={(values, { setSubmitting }) => {
              setError("");
              return expenseActions
                .updateExpense(id, values)
                .then(d => {
                  setSubmitting(false);
                  setSuccess(true);
                  history.push(`/expense/${id}`);
                })
                .catch(err => {
                  setSubmitting(false);
                  setError(err);
                });
            }}
          >
            {({ handleSubmit, isSubmitting, values }) => (
              <form onSubmit={handleSubmit}>
                <pre>{JSON.stringify(values, null, 2)}</pre>
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
                  options={categoryOptions}
                />
                <Field
                  placeholder="Comment"
                  name="comment"
                  component={FormControl.TextArea}
                />
                <Field
                  placeholder="Paid On"
                  type="datetime-local"
                  name="paidOn"
                  component={FormControl.DateTimeInput}
                  timeFormat={false}
                />
                <Field
                  placeholder="Paid On"
                  type="datetime-local"
                  name="paidOn"
                  component={FormControl.DateTimeInput}
                  dateFormat={false}
                />
                <Field
                  placeholder="Bill/Attachment"
                  name="attachment"
                  component={FormControl.FileInput}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {}}
                  loading={isSubmitting}
                >
                  UPDATE
                </Button>
                {success && (
                  <Alert message="Successfully updated!" type="success" />
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

export default EditExpense;
