import { getCurrencyQuotation } from '../../services/awesomeapi';

// Action Types
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
export const SUBMIT_CURRENCIES_INFO = 'SUBMIT_CURRENCIES_INFO';

export const ADD_EXPENSE_INFO = 'ADD_EXPENSE_INFO';
export const REMOVE_EXPENSE_INFO = 'REMOVE_EXPENSE_INFO';

// Action Creators
export const submitUserInfo = (payload) => ({
  type: SUBMIT_USER_INFO,
  payload,
});

export const submitCurrenciesInfo = (currencies) => ({
  type: SUBMIT_CURRENCIES_INFO,
  payload: { currencies },
});

export const getCurrencies = () => async (dispatch) => {
  const dataCurrencies = await getCurrencyQuotation();
  const currencies = Object
    .keys(dataCurrencies)
    .filter((actualCurrency) => actualCurrency !== 'USDT');

  dispatch(submitCurrenciesInfo(currencies));
};

export const addExpenseInfo = (expense) => ({
  type: ADD_EXPENSE_INFO,
  payload: { expense },
});

export const getExpense = (expense) => async (dispatch) => {
  const exchangeRates = await getCurrencyQuotation();

  dispatch(addExpenseInfo({ ...expense, exchangeRates }));
};

export const removeExpenseInfo = (expense) => ({
  type: REMOVE_EXPENSE_INFO,
  payload: { expense },
});
