import axios from 'axios';

let headers = {
  'Content-Type': 'application/json'
};

let user = JSON.parse(localStorage.getItem('user'));

if (user && user.token) {
  headers.Authorization = user.token;
}

const instance = axios.create({
  baseURL: 'https://musicplayer-api-wal.herokuapp.com/api/v1/',
  headers
});

export default instance;
