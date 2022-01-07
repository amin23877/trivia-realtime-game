import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store'; // #redux step1
import App from './App';

ReactDOM.render(
  // #redux step2
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
