import types from '../types';

const save = budget => ({
  type: types.ADD_BUDGET,
  payload: { budget },
});

export default {
  save,
};
