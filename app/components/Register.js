// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.css';
import routes from '../constants/routes';
import { userActions } from '../actions/user.actions';
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  FormText
} from 'reactstrap';

//type Props = {};

class Register extends React.Component {
  //props: Props;
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('this is changing');
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { user } = this.state;
    event.preventDefault();
    dispatch(userActions.register(user));
    console.log('submit');

    //this.setState({ submitted: true });
    if (user.username && user.password) {
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <div id={styles.signupContainer}>
            <h3>Sign Up</h3>
            <br />
            <form name="form">
              <FormGroup
                className={
                  this.state.submitted && !this.state.user.username
                    ? ' has-error'
                    : ''
                }
              >
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  autoFocus
                  value={this.state.user.username}
                  onChange={this.handleChange}
                />
                {this.state.submitted && !this.state.user.username && (
                  <div className="help-block">Username is required</div>
                )}
              </FormGroup>

              <FormGroup
                className={
                  this.state.submitted && !this.state.user.email
                    ? ' has-error'
                    : ''
                }
              >
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  value={this.state.user.email}
                  onChange={this.handleChange}
                />
                {this.state.submitted && !this.state.user.email && (
                  <div className="help-block">Email is required</div>
                )}
              </FormGroup>

              <FormGroup
                className={
                  this.state.submitted && !this.state.user.password
                    ? ' has-error'
                    : ''
                }
              >
                <Label for="newPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="newPassword"
                  value={this.state.user.password}
                  onChange={this.handleChange}
                />
                {this.state.submitted && !this.state.user.password && (
                  <div className="help-block">Password is required</div>
                )}
              </FormGroup>

              <br />

              <Button color="primary" onClick={this.handleSubmit}>
                SIGN UP
              </Button>
            </form>

            <br />
            <Link to={routes.LOGIN}>
              <i className="fa fa-arrow-left fa-1x" />{' '}
              <span>Already have an account! Login</span>
            </Link>
          </div>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.register;
  return {
    registering
  };
}

export default Register;
