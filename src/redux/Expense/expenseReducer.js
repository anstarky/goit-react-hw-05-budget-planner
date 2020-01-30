import types from '../types';

const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [...state, payload.expense];

    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default expenseReducer;
