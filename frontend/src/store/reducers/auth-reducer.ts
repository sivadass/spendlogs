import { actionTypes } from "../actions";

export const authInitialState = {
  isAuthenticated: false
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: {
          ...state.user,
          _id: action.payload.user._id,
          role: action.payload.user.role,
          email: action.payload.user.email,
          name: action.payload.user.name,
          language: action.payload.user.language,
          currency: action.payload.user.currency
        }
      };
    case actionTypes.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, user: null };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      console.log("payload in reducer", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          language: action.payload.language,
          currency: action.payload.currency
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
