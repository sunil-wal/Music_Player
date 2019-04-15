import config from '../config'
import axios from 'axios'

export const userService = {
  login,
  logout,
  register
};

function login(username, password) {
  axios.post(config.apiUrl, {username, password}).then(); // complete this
}

function logout(){

}

function register(user) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}
