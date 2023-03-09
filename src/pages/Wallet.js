import React from 'react';
import '../styles/wallet.css';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div className="container-wallet">
        <Header />
        <WalletForm />
        <Table />

        <div>TrybeWallet</div>

      </div>
    );
  }
}

export default Wallet;
