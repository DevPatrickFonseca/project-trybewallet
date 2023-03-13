// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SUBMIT_CURRENCIES_INFO, ADD_EXPENSE_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_CURRENCIES_INFO:
    return {
      ...state,
      ...action.payload,
    };

  case ADD_EXPENSE_INFO:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload.expense,
      ],
    };

  default:
    return state;
  }
};

export default wallet;
