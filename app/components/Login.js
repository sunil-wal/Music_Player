import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

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
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        {(this.props.isLoggedIn) ? <Redirect to={{pathname:'/home'}}/> : null}
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label hasFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label hasFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { isLoggedIn } = state.authentication;
  return {
    isLoggedIn
  };
}
export default connect(mapStateToProps)(LoginPage);
// export default LoginPage;
