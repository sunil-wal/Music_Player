import React, { Component } from "react";
import {
    Redirect,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import routes from './constants/routes';
import HomePage from './containers/HomePage';
import LoginPage from './components/Login';
import CounterPage from './containers/CounterPage';
import RegisterPage from './containers/RegisterPage';
// {isLoggedIn ? null : <Redirect to={routes.HOME} />}
class Routes extends Component {

  render () {
      const isLoggedIn = this.props.isLoggedIn
      return (
              <Switch>
                  <Route exact path={routes.LOGIN} component = { LoginPage } />
                  <Route render = {(props) => <React.Fragment>

                          <div className="primary-navigation-content">
                              <Switch>
                              <Route path={routes.COUNTER} component={CounterPage} />
                              <Route path={routes.HOME} component={HomePage} />
                              <Route path={routes.REGISTER} component={RegisterPage} />
                              <Route path={routes.LOGIN} component={LoginPage} />
                              </Switch>
                          </div>
                      </React.Fragment>} />
              </Switch>
      )
  }
}

export default withRouter(Routes)
