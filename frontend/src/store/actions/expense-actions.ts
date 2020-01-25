import moment from "moment";
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

// from - start from past any date
// to - end after start date

const getExpenses = (
  from: string = "",
  to: string = "",
  page: number = 1,
  limit: number = 5
) => {
  return getJSON(`/expense?from=${from}&to=${to}&page=${page}&limit=${limit}`)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getDashboardDetails = () => {
  return getJSON(`/expense/dashboard`)
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
  getDashboardDetails,
  getExpenseDetails,
  updateExpense,
  deleteExpense
};
