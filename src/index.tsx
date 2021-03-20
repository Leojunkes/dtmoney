import React from 'react';
import GlobalStyle from './styles/globalStyles';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transactions 1',
          amount:400,
          type:'deposit',
          category:'Food',
          createAt:new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
