import { postJSON, getJSON, putJSON, deleteJSON } from "../../utils/axios";

const addCategory = (values: {}) => {
  return postJSON("/category", values)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getCategories = () => {
  return getJSON("/category")
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getCategoryDetails = (id: string) => {
  return getJSON(`/category/${id}`)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const updateCategory = (id: string, values: any) => {
  return putJSON(`/category/${id}`, values)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const deleteCategory = (id: string) => {
  return deleteJSON(`/category/${id}`)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

export default {
  addCategory,
  getCategories,
  getCategoryDetails,
  updateCategory,
  deleteCategory
};
