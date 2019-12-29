import { actionTypes } from "../actions";

export const authInitialState = {
  isAuthenticated: false
};

function reducer(state, action) {
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
          name: action.payload.user.name
        }
      };
    case actionTypes.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, user: null };
    case actionTypes.CLIENTS_SUCCESS:
      return { ...state, clients: action.payload };
    default:
      return state;
  }
}

export default reducer;
