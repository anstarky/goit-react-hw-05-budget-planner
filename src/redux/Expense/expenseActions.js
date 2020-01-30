import shortid from 'shortid';
import types from '../types';

const save = ({ name, amount }) => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        name,
        amount,
      },
    },
  };
};

const del = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};

export default {
  save,
  del,
};
