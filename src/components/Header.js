import React, { Component } from 'react';
import '../styles/wallet.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WalletForm from './WalletForm';
import logo from '../images/logo-trybe-wallet.png';
import imgCoin from '../images/wallet-coins.png';
import imgProfile from '../images/wallet-profile.png';

class Header extends Component {
  state = {
    totalExpense: 0,
    currency: 'BRL',
  };

  render() {
    const { email } = this.props;

    const { totalExpense, currency } = this.state;

    return (

      <div className="wallet-header">
        <div className="wallet-header-top">
          <div className="logo-trybe-wallet">
            <Link to="/" alt="Login"><img src={ logo } alt="TrybeWallet" /></Link>
          </div>
          <div className="wallet-coins">
            <img src={ imgCoin } alt="TrybeWallet" />
            Total de despesas: R$
            <p data-testid="total-field">{totalExpense}</p>
            <span data-testid="header-currency-field">{currency}</span>
          </div>
          <div className="wallet-profile">
            <img src={ imgProfile } alt="TrybeWallet" />
            <p data-testid="email-field">{email}</p>
          </div>
        </div>

        <WalletForm />

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
