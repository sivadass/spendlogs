import moment from "moment";
import { actionTypes } from "../actions";

const to = moment()
  .endOf("month")
  .toISOString();
const from = moment()
  .subtract(1, "months")
  .endOf("day")
  .toISOString();

export const expenseInitialState = {
  list: {
    loading: false,
    error: null,
    data: [],
    pageNumber: 1,
    totalPages: 1,
    filters: {
      from,
      to
    }
  },
  details: {
    loading: false,
    deleting: false,
    updating: false,
    error: null,
    data: {}
  }
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case actionTypes.EXPENSES_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          error: null
        }
      };
    case actionTypes.EXPENSES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: null,
          data: action.payload
        }
      };
    case actionTypes.EXPENSES_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload
        }
      };
    case actionTypes.EXPENSE_DETAILS_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
          error: null
        }
      };
    case actionTypes.EXPENSE_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: null,
          data: action.payload
        }
      };
    case actionTypes.EXPENSE_DETAILS_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: action.payload
        }
      };
    case actionTypes.EXPENSE_DELETE_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          deleting: true,
          error: null
        }
      };
    case actionTypes.EXPENSE_DELETE_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          deleting: false,
          data: {}
        }
      };

    case actionTypes.EXPENSE_DELETE_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          deleting: false,
          error: action.payload
        }
      };
    case actionTypes.EXPENSE_UPDATE_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          updating: true,
          error: null
        }
      };
    case actionTypes.EXPENSE_UPDATE_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          updating: false,
          data: action.payload
        }
      };

    case actionTypes.EXPENSE_UPDATE_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          updating: false,
          error: action.payload
        }
      };
    case actionTypes.EXPENSE_FILTER_CHANGE:
      return {
        ...state,
        list: {
          ...state.list,
          filters: action.payload
        }
      };
    case actionTypes.EXPENSE_FILTER_CLEAR:
      return {
        ...state,
        list: {
          ...state.list,
          filters: {
            from: "",
            to: ""
          }
        }
      };
    default:
      return state;
  }
}

export default reducer;
