import {
  SUBMIT_CURRENCIES_INFO,
  ADD_EXPENSE_INFO,
  REMOVE_EXPENSE_INFO,
  EDIT_EXPENSE,
  EDIT_EXPENSE_START,
} from '../actions';

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

  case REMOVE_EXPENSE_INFO:
    return {
      ...state,
      expenses: (
        state.expenses
          .filter((expense) => expense.id !== Number(action.payload.expense))
      ),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: (
        state.expenses
          .map((expense) => {
            if (expense.id === (state.idToEdit)) {
              return { ...expense, ...action.payload.expense };
            }
            return expense;
          })
      ),
    };
  case EDIT_EXPENSE_START:
    return {
      ...state,
      idToEdit: action.payload.idToEdit,
      editor: action.payload.editor,
    };
  default:
    return state;
  }
};

export default wallet;
