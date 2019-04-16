import React, { Component } from "react";
import {
    Redirect,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import routes from './constants/routes';
import { HomePage } from './components/HomePage';
import LoginPage from './components/Login';
import CounterPage from './containers/CounterPage';
import RegisterPage from './containers/RegisterPage';
import Track from './components/Track';
// {isLoggedIn ? null : <Redirect to={routes.HOME} />}
// <Route path={routes.HOME} component={HomePage} />
class Routes extends Component {


  render () {
      const isLoggedIn = this.props.isLoggedIn
      return (
              <Switch>
                   <Route exact path={routes.TRACK} component = { Track } />
                   <Route exact path={routes.HOME} component = { HomePage } />
                   <Route exact path={routes.LOGIN} component = { LoginPage } />
                   <Route path={routes.REGISTER} component={RegisterPage} />
                   <Route render = {(props) => <React.Fragment>
                    {isLoggedIn ? null : <Redirect to={routes.LOGIN} />}
                      <HomePage />
                          <div className="primary-navigation-content">
                              <Switch>
                              <Route path={routes.COUNTER} component={CounterPage} />
                              </Switch>
                          </div>
                      </React.Fragment>} />
              </Switch>
      )
  }
}

export default withRouter(Routes)
