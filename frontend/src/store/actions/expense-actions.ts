import { postJSON, getJSON, putJSON, deleteJSON } from "../../utils/axios";

const addExpense = (values: {}) => {
  return postJSON("/expense", values)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getExpenses = () => {
  return getJSON("/expense")
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getExpenseDetails = (id: string) => {
  return getJSON(`/expense/${id}`)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const updateExpense = (id: string, values: any) => {
  return putJSON(`/expense/${id}`, values)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const deleteExpense = (id: string) => {
  return deleteJSON(`/expense/${id}`)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

export default {
  addExpense,
  getExpenses,
  getExpenseDetails,
  updateExpense,
  deleteExpense
};
