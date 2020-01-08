import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import { Store } from "../../store";
import { expenseActions } from "../../store/actions";
import { Alert, Button, FormControl, Icon } from "../../components/core";
import {
  FixedContainer,
  PageTitle,
  Wrapper,
  FixedFormWrapper,
  PageHeader,
  PageActions
} from "../../styled/common";
import BreadCrumbs from "../../components/breadcrumbs";
import { CATEGORY_ICONS } from "../../constants/common";

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
      <PageHeader>
        <BreadCrumbs
          links={[
            { name: "My Categories", url: "/category" },
            { name: "Add New", url: "" }
          ]}
        />
        <PageActions />
      </PageHeader>
      <Wrapper>
        <Formik
          initialValues={{
            name: "",
            icon: ""
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
                placeholder="Name"
                type="text"
                name="payee"
                component={FormControl.Input}
              />
              <Field
                placeholder="Category Icon"
                type="text"
                name="icon"
                icons={CATEGORY_ICONS}
                component={FormControl.CategoryInput}
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
