import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

if (module.hot) {
  module.hot.accept();
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
