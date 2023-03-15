import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import Wallet from '../../pages/Wallet';

describe('02 - Testa a pagina <Wallet.js />', () => {
  const testInputDescription = 'description-input';
  const testInputTag = 'tag-input';
  const testInputValue = 'value-input';
  const testInputMethod = 'method-input';
  const testInputCurrency = 'currency-input';

  test('1 > Se pagina renderiza corretamente', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');

    const inputDescription = screen.getByTestId(testInputDescription);
    expect(inputDescription.id).toContain('description');
    expect(inputDescription).toBeVisible();
    expect(inputDescription).toBeInTheDocument();

    const inputTag = screen.getByTestId(testInputTag);
    expect(inputTag.id).toContain('tag');
    expect(inputTag).toBeVisible();
    expect(inputTag).toBeInTheDocument();

    const inputValue = screen.getByTestId(testInputValue);
    expect(inputValue.id).toContain('value');
    expect(inputValue).toBeVisible();
    expect(inputValue).toBeInTheDocument();

    const inputMethod = screen.getByTestId(testInputMethod);
    expect(inputMethod.id).toContain('method');
    expect(inputMethod).toBeVisible();
    expect(inputMethod).toBeInTheDocument();

    const inputCurrency = screen.getByTestId(testInputCurrency);
    expect(inputCurrency.id).toContain('currency');
    expect(inputCurrency).toBeVisible();
    expect(inputCurrency).toBeInTheDocument();
  });
});
