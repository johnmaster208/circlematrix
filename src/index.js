import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';

const store = configureStore();
render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
