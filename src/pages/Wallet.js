import React from 'react';
import '../styles/wallet.css';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div className="container-wallet">
        <div>
          <Header />
        </div>

        <Table />

      </div>
    );
  }
}

export default Wallet;
