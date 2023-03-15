import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../images/logo-trybe-wallet.png';
import haveValidEmail from '../services/emailValidator';
import { submitUserInfo } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    validEmail: true,
  };

  emailIsValid = () => {
    const { email } = this.state;
    this.setState({
      validEmail: haveValidEmail(email),
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.emailIsValid);
  };

  render() {
    const { history, dispatch } = this.props;

    const passwordMinSize = 6;

    const { email, password, validEmail } = this.state;

    return (
      <div className="container-login">
        <div className="login-page">
          <img
            src={ logo }
            name="TrybeWallet"
            alt="TrybeWallet"
            className="logo-trybe-wallet"
          />
          <p className="trybe-wallet" alt="TrybeWallet" />

          <div>
            <input
              id="loginEmailInput"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              placeholder="E-mail?"
              className="email-input"
            />
          </div>
          <div>
            <input
              id="loginPasswordInput"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              placeholder="Senha"
              className="password-input"
            />
          </div>
          <div>
            <button
              id="loginSubmitButton"
              name="loginSubmitButton"
              type="button"
              disabled={ !(validEmail && password.length >= passwordMinSize) }
              onClick={ () => {
                dispatch(submitUserInfo({ email }));
                history.push('/carteira');
              } }
              className="login-button"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null)(Login);
