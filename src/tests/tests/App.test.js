import React from 'react';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouterAndRedux } from '../helpers/renderWith';

describe('Test 01 - Teste o componente <App.js />', () => {
  test('1 - Se pagina de Login possui os components', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  // test('2 - Se primeiro link deve possuir o texto About', () => {
  //   renderWithRouter(<App />);
  //   const linkAbout = screen.getByRole('link', { name: 'About' });

  //   expect(linkAbout).toBeInTheDocument();
  // });

  // test('3 - Se primeiro link deve possuir o texto Favorite Pokémon', () => {
  //   renderWithRouter(<App />);
  //   const linkFavoritePokemon = screen.getByRole('link', { name: 'Favorite Pokémon' });

  //   expect(linkFavoritePokemon).toBeInTheDocument();
  // });
});
