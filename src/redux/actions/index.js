// Action Types
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
export const SUBMIT_WALLET_INFO = 'SUBMIT_WALLET_INFO';

// Action Creators
export const submitUserInfo = (payload) => ({
  type: SUBMIT_USER_INFO,
  payload,
});

export const submitWalletInfo = (walletInfo) => ({
  type: SUBMIT_USER_INFO,
  payload: walletInfo,
});
