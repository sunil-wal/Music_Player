import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './components/Login';
import CounterPage from './containers/CounterPage';
import RegisterPage from './containers/RegisterPage';


export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
      <Route  path={routes.REGISTER} component={RegisterPage} />
      <Route  path={routes.LOGIN} component={LoginPage} />
      
    </Switch>
  </App>
);
