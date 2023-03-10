import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/wallet.css';
import PropTypes from 'prop-types';
// import { getCurrencyQuotation } from '../services/awesomeapi';
// import { submitWalletInfo } from '../redux/actions';

class WalletForm extends Component {
  state = {
    description: '',
    tag: 'Alimentação',
    value: '',
    method: 'Dinheiro',
    currency: 'USD',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.emailIsValid);
  };

  render() {
    const {
      description,
      tag,
      value,
      method,
      currency,
    } = this.state;

    const { currencies } = this.props;

    return (

      <div className="wallet-header-form">

        <form>
          <label htmlFor="description">
            Descrição da despesa
            <input
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
              name="tag"
              value={ tag }
              type="text"
              className="tag-input"
              data-testid="tag-input"
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
              name="value"
              value={ value }
              type="number"
              className="value-input"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="method">
            Metodo de pagamento
            <select
              name="method"
              value={ method }
              type="text"
              className="method-input"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="currency">
            Moeda
            <select
              name="currency"
              value={ currency }
              type="select"
              className="currency-input"
              data-testid="currency-input"
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

          <button
            type="submit"
            onClick={ () => {} }
            className="button-wallet"
          >
            Adicionar Despesa
          </button>

        </form>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
