import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import WalletForm from '../../components/WalletForm';
import Wallet from '../../pages/Wallet';

describe('04 - Testa o componente <WalletForm.js />', () => {
  const testInputDescription = 'description-input';
  const testInputTag = 'tag-input';
  const testInputValue = 'value-input';
  const testInputMethod = 'method-input';
  const testInputCurrency = 'currency-input';
  const testButtonRemove = 'delete-btn';
  const testButtonEdit = 'edit-btn';
  const testButtonAdd = 'Adicionar Despesa';

  test('1 > Se componente renderiza corretamente', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const inputDescription = screen.getByTestId(testInputDescription);
    expect(inputDescription.name).toContain('description');
    expect(inputDescription).toBeInTheDocument();

    const inputTag = screen.getByTestId(testInputTag);
    expect(inputTag.name).toContain('tag');
    expect(inputTag).toBeInTheDocument();

    const inputValue = screen.getByTestId(testInputValue);
    expect(inputValue.name).toContain('value');
    expect(inputValue).toBeInTheDocument();

    const inputMethod = screen.getByTestId(testInputMethod);
    expect(inputMethod.name).toContain('method');
    expect(inputMethod).toBeInTheDocument();

    const inputCurrency = screen.getByTestId(testInputCurrency);
    expect(inputCurrency.name).toContain('currency');
    expect(inputCurrency).toBeInTheDocument();

    const buttonAdd = screen.getByRole('button', { name: testButtonAdd });
    expect(buttonAdd.type).toContain('button');
    expect(buttonAdd).toBeInTheDocument();
  });

  test('2 > Se componente adiciona despesas corretamente', async () => {
    renderWithRouterAndRedux(<Wallet />);

    await waitFor(() => screen.getByText('USD'));

    const addDescription = screen.getByTestId(testInputDescription);
    userEvent.type(addDescription, 'Laptop');

    const addTag = screen.getByTestId(testInputTag);
    userEvent.selectOptions(addTag, 'Trabalho');

    const addValue = screen.getByTestId(testInputValue);
    userEvent.type(addValue, '500');

    const inputMethod = screen.getByTestId(testInputMethod);
    userEvent.selectOptions(inputMethod, 'Dinheiro');

    const inputCurrency = screen.getByTestId(testInputCurrency);
    userEvent.selectOptions(inputCurrency, 'USD');

    const buttonAdd = screen.getByRole('button', { name: testButtonAdd });
    userEvent.click(buttonAdd);

    await waitFor(() => screen.getByTestId('delete-btn'));

    expect(screen.getByRole('cell', { name: /laptop/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /trabalho/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /dinheiro/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /500\.00/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', {
      name: /dólar americano\/real brasileiro/i,
    })).toBeInTheDocument();
  });

  test('3 > Se componente edita despesas corretamente', async () => {
    renderWithRouterAndRedux(<Wallet />);

    await waitFor(() => screen.getByText('USD'));

    const addDescription = screen.getByTestId(testInputDescription);
    userEvent.type(addDescription, 'Laptop');

    const addTag = screen.getByTestId(testInputTag);
    userEvent.selectOptions(addTag, 'Trabalho');

    const addValue = screen.getByTestId(testInputValue);
    userEvent.type(addValue, '500');

    const inputMethod = screen.getByTestId(testInputMethod);
    userEvent.selectOptions(inputMethod, 'Dinheiro');

    const inputCurrency = screen.getByTestId(testInputCurrency);
    userEvent.selectOptions(inputCurrency, 'USD');

    const buttonAdd = screen.getByRole('button', { name: testButtonAdd });
    userEvent.click(buttonAdd);

    await waitFor(() => screen.getByTestId(testButtonRemove));

    const editButton = screen.getByTestId(testButtonEdit);
    userEvent.click(editButton);

    expect(addDescription).toHaveValue();
    expect(addTag).toHaveValue();
    expect(addValue).toHaveValue();
    expect(inputMethod).toHaveValue();
    expect(inputCurrency).toHaveValue();
  });

  test('4 > Se componente edita despesas corretamente', async () => {
    renderWithRouterAndRedux(<Wallet />);

    await waitFor(() => screen.getByText('USD'));

    const addDescription = screen.getByTestId(testInputDescription);
    userEvent.type(addDescription, 'Laptop');

    const addTag = screen.getByTestId(testInputTag);
    userEvent.selectOptions(addTag, 'Trabalho');

    const addValue = screen.getByTestId(testInputValue);
    userEvent.type(addValue, '500');

    const inputMethod = screen.getByTestId(testInputMethod);
    userEvent.selectOptions(inputMethod, 'Dinheiro');

    const inputCurrency = screen.getByTestId(testInputCurrency);
    userEvent.selectOptions(inputCurrency, 'USD');

    const buttonAdd = screen.getByRole('button', { name: testButtonAdd });
    userEvent.click(buttonAdd);

    await waitFor(() => screen.getByTestId(testButtonRemove));

    const editButton = screen.getByTestId(testButtonEdit);
    userEvent.click(editButton);

    userEvent.clear(addValue);
    userEvent.type(addValue, '250');

    const buttonEdit = screen.getByRole('button', { name: 'Editar despesa' });
    userEvent.click(buttonEdit);

    await waitFor(() => screen.getByText('250.00'));
  });
});

// screen.logTestingPlaygroundURL(); - Tests
