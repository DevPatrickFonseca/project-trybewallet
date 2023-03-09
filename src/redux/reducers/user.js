// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_USER_INFO } from '../actions/index';

// Requisito 02
const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_USER_INFO: {
    return {
      ...state,
      ...action.payload,
    };
  }

  default:
    return state;
  }
};

export default user;
