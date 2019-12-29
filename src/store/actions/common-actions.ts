import actionTypes from "./action-types";

export const toggleMenu = (dispatch: any) => {
  return dispatch({ type: actionTypes.TOGGLE_MENU });
};

export default {
  toggleMenu
};
