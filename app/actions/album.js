import { ALBUM } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const createAlbumSuccess = message => {
  return { type: ALBUM.SAVE_SUCCESS, message };
};

export const createAlbumError = error => {
  return { type: ALBUM.SAVE_ERROR, message: error.message };
};

export const createAlbum = payload => dispatch => {
  return axios
    .post('http://localhost:3000/album', payload)
    .then(json => {
      dispatch(createAlbumSuccess(json.data.message));
    })
    .catch(error => dispatch(createAlbumError(error)));
};

export const getAlbumSuccess = album => {
  return { type: ALBUM.SUCCESS, album };
};

export const getAlbumError = error => {
  return { type: ALBUM.ERROR, message: error.message };
};

export const getAlbum = () => dispatch => {
  const headerData = {
    headers: authHeader()
  };
  console.log(headerData);
  return axios
    .get('https://musicplayer-api-wal.herokuapp.com/api/v1/albums', headerData)
    .then(json => {
      dispatch(getAlbumSuccess(json.data.result));
    })
    .catch(error => dispatch(getAlbumError(error)));
};
