import { actionTypes } from "../actions";

export const expenseInitialState = {
  list: {
    loading: false,
    error: null,
    data: [],
    pageNumber: 1,
    totalPages: 1,
    filters: null
  },
  details: {
    loading: false,
    error: null,
    data: {}
  }
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.CLIENTS_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          error: null
        }
      };
    case actionTypes.CLIENTS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: null,
          data: action.payload
        }
      };
    case actionTypes.CLIENTS_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload
        }
      };
    case actionTypes.CLIENT_DETAILS_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
          error: null
        }
      };
    case actionTypes.CLIENT_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: null,
          data: action.payload
        }
      };
    case actionTypes.CLIENT_DETAILS_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default reducer;
