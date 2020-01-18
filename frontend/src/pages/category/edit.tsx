import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash/get";
import _pick from "lodash/pick";
import { Store } from "../../store";
import { FixedContainer, Wrapper } from "../../styled/common";
import BreadCrumbs from "../../components/breadcrumbs";
import CategoryForm from "../../components/form/category";
import { categoryActions, actionTypes } from "../../store/actions";

const EditCategory = () => {
  let { id = "" } = useParams();
  let history = useHistory();
  const { state, dispatch } = useContext(Store);
  const getDetails = () => {
    dispatch({ type: actionTypes.CATEGORY_DETAILS_REQUEST, payload: {} });
    return categoryActions
      .getCategoryDetails(id)
      .then((d: any) => {
        dispatch({
          type: actionTypes.CATEGORY_DETAILS_SUCCESS,
          payload: _get(d, "data", {})
        });
      })
      .catch((err: any) => {
        dispatch({
          type: actionTypes.CATEGORY_DETAILS_FAILURE,
          payload: err.message
        });
      });
  };

  const handleFormSubmit = (values: any) => {
    return categoryActions.updateCategory(values, id);
  };
  useEffect(() => {
    getDetails();
  }, [id]);
  return (
    <FixedContainer>
      <BreadCrumbs
        links={[
          { name: "Details", url: `/category/${id}` },
          { name: "Edit", url: "" }
        ]}
      />
      <Wrapper>
        <CategoryForm
          initialValues={{
            name: _get(state, "category.details.data.name", ""),
            icon: _get(state, "category.details.data.icon", "")
          }}
          handleFormSubmit={handleFormSubmit}
          isEditing
        />
      </Wrapper>
    </FixedContainer>
  );
};

export default EditCategory;
