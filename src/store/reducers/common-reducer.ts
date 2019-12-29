import { actionTypes } from "../actions";

export const commonInitialState = {
  isMenuOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
}

export default reducer;
