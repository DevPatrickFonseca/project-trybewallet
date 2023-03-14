import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/wallet.css';
import PropTypes from 'prop-types';
import { getExpense, editExpense } from '../redux/actions';

const alimentacao = 'Alimentação';
class WalletForm extends Component {
  state = {
    description: '',
    tag: alimentacao,
    value: '',
    method: 'Dinheiro',
    currency: 'USD',
    firstEdit: true,
  };

  componentDidUpdate(prevState) {
    const { expenses, idToEdit, editor } = this.props;
    const { firstEdit } = this.state;

    const { description, tag, value, method, currency } = expenses
      .find((expense) => expense.id === idToEdit) || prevState;

    if (editor === true && firstEdit === true) {
      if (
        description === prevState.description
        || tag === prevState.tag
        || value === prevState.value
        || method === prevState.method
        || currency === prevState.currency
      ) {
        this.setState({ firstEdit: false });
        return;
      }

      this.setState({
        description,
        tag,
        value,
        method,
        currency,
        firstEdit: false,
      });
    }
  }

  resetState = () => {
    this.setState({
      description: '',
      tag: alimentacao,
      value: '',
      method: 'Dinheiro',
      currency: 'USD',
      firstEdit: true,
    });
  };

  addExpenses = (event) => {
    event.preventDefault();

    const { dispatch, expenses } = this.props;

    const { description, tag, value, method, currency } = this.state;

    const expensesSend = {
      id: expenses.length,
      description,
      tag,
      value,
      method,
      currency,
    };

    dispatch(getExpense(expensesSend));

    this.resetState();
  };

  editExpense = () => {
    const { dispatch } = this.props;

    const { description, tag, value, method, currency } = this.state;

    const expenseEdit = {
      description,
      tag,
      value,
      method,
      currency,
    };

    dispatch(editExpense(expenseEdit));

    setTimeout(() => {
      this.resetState();
    }, '10');
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      description,
      tag,
      value,
      method,
      currency,
    } = this.state;

    const { currencies, editor } = this.props;

    return (
      <div className="wallet-header-form">
        <form>
          <label htmlFor="description">
            Descrição da despesa
            <input
              id="description"
              name="description"
              value={ description }
              type="text"
              className="description-input"
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="tag">
            Categoria da despesa
            <select
              id="tag"
              name="tag"
              value={ tag }
              type="text"
              className="tag-input"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              name="value"
              value={ value }
              type="number"
              className="value-input"
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="method">
            Metodo de pagamento
            <select
              id="method"
              name="method"
              value={ method }
              type="text"
              className="method-input"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              value={ currency }
              type="select"
              className="currency-input"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {currencies.map((actualCurrency) => (
                <option
                  key={ actualCurrency }
                  value={ actualCurrency }
                >
                  {actualCurrency}
                </option>
              ))}
            </select>
          </label>
          {
            editor
              ? (
                <button
                  type="button"
                  onClick={ this.editExpense }
                  className="button-wallet"
                >
                  Editar despesa
                </button>
              )
              : (
                <button
                  type="button"
                  onClick={ this.addExpenses }
                  className="button-wallet"
                >
                  Adicionar Despesa
                </button>
              )
          }

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
  editor: state.wallet.editor,
});

WalletForm.propTypes = {
  editor: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    method: PropTypes.string,
    currency: PropTypes.string,
  })).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
