import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import _get from "lodash/get";
import { Store } from "../../store";
import { categoryActions } from "../../store/actions";
import { Alert, Button, FormControl, Icon } from "../../components/core";
import {
  FixedContainer,
  Wrapper,
  PageHeader,
  PageActions
} from "../../styled/common";
import BreadCrumbs from "../../components/breadcrumbs";
import CategoryForm from "../../components/form/category";

const initialValues = {
  name: "",
  icon: ""
};

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
        <CategoryForm
          initialValues={initialValues}
          handleFormSubmit={categoryActions.addCategory}
        />
      </Wrapper>
    </FixedContainer>
  );
};

export default AddExpense;
