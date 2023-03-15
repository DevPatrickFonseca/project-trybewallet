import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import Header from '../../components/Header';
import App from '../../App';
import Wallet from '../../pages/Wallet';
import mockData from '../helpers/mockData';

describe('03 - Teste o componente <Header.js />', () => {
  const testEmailField = 'email-field';
  const testTotalField = 'total-field';
  const testValueInput = 'value-input';
  const testHeaderCurrencyField = 'header-currency-field';

  const dataCurrencies = [{
    id: 0,
    description: '',
    tag: 'Alimentação',
    value: '5',
    method: 'Dinheiro',
    currency: 'USD',
    exchangeRates: mockData,
  },
  {
    id: 1,
    description: '',
    tag: 'Alimentação',
    value: '7',
    method: 'Dinheiro',
    currency: 'USD',
    exchangeRates: mockData },
  ];

  const INITIAL_STATE = {
    wallet: {
      currencies: [],
      expenses: dataCurrencies,
      editor: false,
      idToEdit: 0,
    },
  };

  test('1 > Se renderiza corretamente', () => {
    renderWithRouterAndRedux(<Header />, '/carteira');

    const emailField = screen.getByTestId(testEmailField);
    expect(emailField).toBeInTheDocument();

    const totalField = screen.getByTestId(testTotalField);
    expect(totalField).toBeInTheDocument();

    const headerCurrencyField = screen.getByTestId(testHeaderCurrencyField);
    expect(headerCurrencyField).toBeInTheDocument();
  });

  test('2 > Se renderiza total de despesas', () => {
    renderWithRouterAndRedux(<Header />, '/carteira');

    const totalField = screen.getByTestId(testTotalField);
    expect(totalField).toBeVisible();
    expect(totalField).toHaveTextContent('0.00');

    const headerCurrencyField = screen.getByTestId(testHeaderCurrencyField);
    expect(headerCurrencyField).toBeInTheDocument('BRL');
  });

  test('3 > Se possui campo nome do usuário', () => {
    renderWithRouterAndRedux(<Header />, '/carteira');

    const hasEmailField = screen.getByTestId(testEmailField);
    expect(hasEmailField).toBeVisible();
  });

  test('4 > Se renderiza total de despesas e nome do usuário', () => {
    const { history } = renderWithRouterAndRedux(<App />, '/carteira');

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button');

    userEvent.type(inputEmail, 'trybe@trybe.com');
    userEvent.type(inputPassword, 'Trybe@123');
    userEvent.click(loginButton);

    expect(history.location.pathname).toBe('/carteira');

    const showUserEmailField = screen.getByTestId(testEmailField);
    expect(showUserEmailField).toBeInTheDocument('trybe@trybe.com');

    const inputValue = screen.getByTestId(testValueInput);
    const addButton = screen.getByRole('button', { name: 'Adicionar Despesa' });

    userEvent.type(inputValue, '5');
    userEvent.click(addButton);

    const totalAndCurrency = screen.getByTestId(testTotalField, testHeaderCurrencyField);
    expect(totalAndCurrency).toBeInTheDocument('26.60', 'BRL');
  });

  test('5 > Se reconhece remoção de despesa', async () => {
    renderWithRouterAndRedux(<Wallet />, { initialEntries: ['/carteira'], initialState: INITIAL_STATE });

    const showTotal = screen.getByTestId(testTotalField);

    await waitFor(() => expect(showTotal).toHaveTextContent('57.04'));

    const removeExpense = screen.getAllByTestId('delete-btn');

    userEvent.click(removeExpense[0]);

    expect(showTotal).toHaveTextContent('33.27');

    userEvent.click(removeExpense[1]);

    expect(showTotal).toHaveTextContent('0.00');
  });
});
