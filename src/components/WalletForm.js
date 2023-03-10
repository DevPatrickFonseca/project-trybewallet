import React, { Component } from 'react';
import '../styles/wallet.css';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <div className="wallet-header-form">

          <form>
            <label htmlFor="desc-despesa">
              Descrição da despesa
              <input name="desc-despesa" type="text" className="input-desc-despesa" />
            </label>

            <label htmlFor="cate-despesa">
              Categoria da despesa
              <input name="cate-despesa" type="text" className="input-cate-despesa" />
            </label>

            <label htmlFor="valor">
              Valor
              <input name="valor" type="number" className="input-valor" />
            </label>

            <label htmlFor="pagamento">
              Metodo de pagamento
              <input name="pagamento" type="text" className="input-pagamento" />
            </label>

            <label htmlFor="moeda">
              Moeda
              <input name="moeda" type="text" className="input-moeda" />
            </label>

          </form>
        </div>

      </div>
    );
  }
}

export default WalletForm;
