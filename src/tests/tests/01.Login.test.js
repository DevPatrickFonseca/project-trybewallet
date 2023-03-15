import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import Login from '../../pages/Login';
import App from '../../App';

describe('01 - Testa a pagina <Login.js />', () => {
  const initialEntries = ['/'];

  test('1 > Se pagina renderiza corretamente', () => {
    const { history } = renderWithRouterAndRedux(<Login />, { initialEntries });
    expect(history.location.pathname).toBe('/');

    const loginInputEmail = screen.getByTestId('email-input');
    expect(loginInputEmail.placeholder).toContain('E-mail?');
    expect(loginInputEmail).toBeInTheDocument();

    const loginInputPassword = screen.getByTestId('password-input');
    expect(loginInputPassword.placeholder).toContain('Senha');
    expect(loginInputPassword).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    expect(loginButton).toBeVisible();
    expect(loginButton).toBeDisabled();
    expect(loginButton).toHaveTextContent('Entrar');
    expect(loginButton).toBeInTheDocument();

    const loginLogoImage = screen.getByRole('img', { name: 'TrybeWallet' });
    expect(loginLogoImage).toBeVisible();
    expect(loginLogoImage).toBeInTheDocument();
  });

  test('2 > Se pagina escreve e lê dados corretamente', async () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries });
    expect(history.location.pathname).toBe('/');

    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    expect(loginButton).toHaveAttribute('disabled');

    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, '');
    userEvent.type(inputEmail, 'trybe');
    userEvent.type(inputEmail, 'trybe@trybe');
    userEvent.type(inputEmail, 'trybe@trybe.com');
    expect(loginButton).toHaveAttribute('disabled');

    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputPassword, '');
    userEvent.type(inputPassword, 'Try');
    userEvent.type(inputPassword, 'Trybe');
    userEvent.type(inputPassword, 'Trybe@123');
    expect(loginButton).not.toHaveAttribute('disabled');

    userEvent.click(loginButton);

    expect(history.location.pathname).toBe('/carteira');
  });
});
