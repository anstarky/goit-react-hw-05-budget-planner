import { combineReducers } from 'redux';
import budgetReducer from './Budget/budgetReducer';
import expenseReducer from './Expense/expenseReducer';

export default combineReducers({
  budget: budgetReducer,
  expense: expenseReducer,
});
