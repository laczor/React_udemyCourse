import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// we are parsing the url to the main app component
let baseUrl = 'http://pokeapi.co/api/v2';

ReactDOM.render(
  <App baseUrl={baseUrl} />,
  document.getElementById('root')
);
