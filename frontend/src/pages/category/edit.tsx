import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash/get";
import _pick from "lodash/pick";
import { Store } from "../../store";
import { FixedContainer, Wrapper, FixedFormWrapper } from "../../styled/common";
import BreadCrumbs from "../../components/breadcrumbs";
import CategoryForm from "../../components/form/category";
import { categoryActions } from "../../store/actions";

const EditCategory = () => {
  const { state, dispatch } = useContext(Store);
  let { id = "" } = useParams();
  let history = useHistory();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleFormSubmit = (values: any) => {
    return categoryActions.updateCategory(values, id);
  };
  return (
    <FixedContainer>
      <BreadCrumbs
        links={[
          { name: "My Categories", url: "/category" },
          { name: "Edit", url: "" }
        ]}
      />
      <FixedFormWrapper>
        <Wrapper>
          <CategoryForm
            initialValues={{ name: "di", icon: "public" }}
            handleFormSubmit={handleFormSubmit}
            isEditing
          />
        </Wrapper>
      </FixedFormWrapper>
    </FixedContainer>
  );
};

export default EditCategory;
