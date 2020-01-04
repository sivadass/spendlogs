import { postJSON, getJSON } from "../../utils/axios";

const addExpense = (values: {}) => {
  return postJSON("/client", values)
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

export default { addExpense, getExpenses, getExpenseDetails };
