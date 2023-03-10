import { getCurrencyQuotation } from '../../services/awesomeapi';

// Action Types
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
// export const SUBMIT_WALLET_INFO = 'SUBMIT_WALLET_INFO';
export const SUBMIT_CURRENCIES_INFO = 'SUBMIT_CURRENCIES_INFO';

// Action Creators
export const submitUserInfo = (payload) => ({
  type: SUBMIT_USER_INFO,
  payload,
});

// export const submitWalletInfo = (walletInfo) => ({
//   type: SUBMIT_USER_INFO,
//   payload: walletInfo,
// });

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
