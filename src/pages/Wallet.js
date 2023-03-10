import React from 'react';
import '../styles/wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';
import { getCurrencies } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getCurrencies());
  }

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

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
