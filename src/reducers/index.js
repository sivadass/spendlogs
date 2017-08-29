import { combineReducers } from 'redux';
import expenseReducer from './expense-reducer';

const rootReducer = combineReducers({
  expense: expenseReducer
  // More reducers if there are
  // can go here
});

export default rootReducer;