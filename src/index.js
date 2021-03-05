import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.scss';
import { PokemonApp } from './PokemonApp';


ReactDOM.render(
  <React.StrictMode>
    <PokemonApp />
  </React.StrictMode>,
  document.getElementById('root')
);
