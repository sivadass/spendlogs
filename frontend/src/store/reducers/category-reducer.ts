import { actionTypes } from "../actions";

export const categoryInitialState = {
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
    deleting: false,
    updating: false,
    error: null,
    data: {}
  }
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case actionTypes.CATEGORIES_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          error: null
        }
      };
    case actionTypes.CATEGORIES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: null,
          data: action.payload
        }
      };
    case actionTypes.CATEGORIES_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload
        }
      };
    case actionTypes.CATEGORY_DETAILS_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
          error: null
        }
      };
    case actionTypes.CATEGORY_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: null,
          data: action.payload
        }
      };
    case actionTypes.CATEGORY_DETAILS_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: action.payload
        }
      };
    case actionTypes.CATEGORY_DELETE_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          deleting: true,
          error: null
        }
      };
    case actionTypes.CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          deleting: false,
          data: {}
        }
      };

    case actionTypes.CATEGORY_DELETE_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          deleting: false,
          error: action.payload
        }
      };
    case actionTypes.CATEGORY_UPDATE_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          updating: true,
          error: null
        }
      };
    case actionTypes.CATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          updating: false,
          data: action.payload
        }
      };

    case actionTypes.CATEGORY_UPDATE_FAILURE:
      return {
        ...state,
        details: {
          ...state.details,
          updating: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default reducer;
