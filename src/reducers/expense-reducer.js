const expenseReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_EXPENSE':
      const latestItems = action.payload;
      return [
        ...state,
        latestItems
      ]

    // case 'REMOVE_EXPENSE':
    //   const idToRemove = action.payload;
    //   const newState = state.filter((item) => item.id !== idToRemove);
    //   return state = newState;
    default:
      return state;
   }
};

export default expenseReducer;