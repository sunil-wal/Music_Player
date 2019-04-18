import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { Button, FormGroup, Alert } from 'reactstrap';
import styles from './Login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      const payload = {
        username,
        password
      };
      this.props.submit(payload);
      // dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div id={styles.loginPage}>
        {this.props.isLoggedIn ? <Redirect to={{ pathname: '/home' }} /> : null}
        <h3>Login</h3>
        <br />
        {this.props.error ? (
          <Alert color="danger">{this.props.error}</Alert>
        ) : null}
        <form name="form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <label hasfor="username">Email</label>
            <input
              type="text"
              name="username"
              autoFocus
              className="form-control"
              value={username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label hasfor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <div id={styles.loginActions}>
            <Button color="primary">LOGIN</Button>
            <Link to="/register" className="btn btn-link">
              SIGN UP
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { isLoggedIn, error } = state.authentication;
  return {
    isLoggedIn,
    error
  };
}
function mapDispatchToProps(dispatch) {
  return {
    submit: payload => {
      dispatch(async (dispatch, getStates) => {
        try {
          dispatch({ type: 'LOGIN_VALIDATE', payload });
          const newState = getStates().authentication;
          if (newState.error == '') {
            dispatch(userActions.login(payload.username, payload.password));
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
// export default LoginPage;
