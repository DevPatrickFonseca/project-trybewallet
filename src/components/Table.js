import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/wallet.css';
import { connect } from 'react-redux';
import imgDelete from '../images/wallet-delete.png';
import imgEdit from '../images/wallet-edit.png';
import { removeExpenseInfo } from '../redux/actions/index';

class Table extends Component {
  removeExpenseId = (expenseId) => {
    const { dispatch } = this.props;

    dispatch(removeExpenseInfo(expenseId));
  };

  render() {
    const { expenses } = this.props;

    return (
      <div className="wallet-table">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {Number(expense.exchangeRates[expense.currency].ask * expense.value)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    name="button-edit"
                    type="submit"
                    className="button-edit"
                  >
                    <img src={ imgEdit } alt="Editar" />

                  </button>
                  <span>
                    {' '}
                  </span>
                  <button
                    id={ expense.id }
                    type="button"
                    data-testid="delete-btn"
                    className="delete-btn"
                    onClick={ () => this.removeExpenseId(expense.id) }
                  >
                    <img src={ imgDelete } alt="Remover" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    method: PropTypes.string,
    currency: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Table);
