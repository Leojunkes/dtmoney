import React from 'react';
import GlobalStyle from './styles/globalStyles';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
