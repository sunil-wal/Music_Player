import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register
};

function login(username, password) {
  return dispatch => {
    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {}

function register() {}
