import types from '../types';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.ADD_BUDGET:
      return Number(action.payload.budget);

    default:
      return state;
  }
};

export default budgetReducer;
