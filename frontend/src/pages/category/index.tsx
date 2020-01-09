import React, { useEffect, useContext } from "react";
import _get from "lodash/get";
import { useHistory } from "react-router-dom";
import { Store } from "../../store";
import { categoryActions, actionTypes } from "../../store/actions";
import CategoryList from "../../components/category-list";
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
  const goToAddNew = () => {
    history.push(`/category/add`);
  };
  useEffect(() => {
    getCategories();
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
        <CategoryList
          data={_get(state, "category.list.data")}
          loading={_get(state, "category.list.loading")}
        />
      </Wrapper>
    </FixedContainer>
  );
};

export default AllCategoriesList;
