import React, { useState, useContext } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash/get";
import moment from "moment";
import { Alert, Button, FormControl } from "../../components/core";
import { CATEGORY_ICONS } from "../../constants/common";
import styled from "styled-components";
import { Wrapper } from "../../styled/common";
import { Store } from "../../store";
import { expenseActions, actionTypes } from "../../store/actions";

const ExpenseFilterSchema = Yup.object().shape({
  from: Yup.string().required("Required"),
  to: Yup.string().required("Required")
});

interface ExpenseFilterProps {
  initialValues: {
    from: string;
    to: string;
  };
}

var valid = function(current: any) {
  let today = moment().endOf("day");
  return current.isBefore(today);
};

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ initialValues }) => {
  const { state, dispatch } = useContext(Store);
  const isLoading = _get(state, "expense.list.loading", false);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ExpenseFilterSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        return dispatch({
          type: actionTypes.EXPENSE_FILTER_CHANGE,
          payload: values
        });
      }}
    >
      {({ handleSubmit, isSubmitting, resetForm }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Wrapper>
            <p>From: </p>
            <Field
              placeholder="Select date"
              name="from"
              component={FormControl.DateTimeInput}
              timeFormat={false}
              isValidDate={valid}
            />
          </Wrapper>
          <Wrapper>
            <p>To: </p>
            <Field
              placeholder="Select date"
              name="to"
              component={FormControl.DateTimeInput}
              timeFormat={false}
              isValidDate={valid}
            />
          </Wrapper>
          <Button
            type="submit"
            disabled={isLoading}
            onClick={() => {}}
            loading={isLoading}
          >
            Filter
          </Button>
          <Button
            type="button"
            variant="default"
            onClick={() => {
              dispatch({
                type: actionTypes.EXPENSE_FILTER_CLEAR,
                payload: null
              });
              resetForm({});
            }}
          >
            Reset
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
};

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  ${Wrapper} {
    display: flex;
    margin-right: 24px;
    align-items: center;
    & > p {
      margin-right: 16px;
      color: #999;
    }
    & > div {
      margin-bottom: 0;
    }
  }
  button {
    max-width: 120px;
    margin-right: 16px;
  }
  @media (max-width: 600px) {
    display: block;
    ${Wrapper} {
      margin: 0 0 16px 0;
      & > p {
        min-width: 50px;
      }
      & > div {
        flex-grow: 1;
      }
    }
    button {
      max-width: initial;
      margin: 0 0 16px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default ExpenseFilter;
