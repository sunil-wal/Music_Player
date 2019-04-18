import { ALBUM } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const createAlbumSuccess = success => {
  return { type: ALBUM.SAVE_SUCCESS, success };
};

export const createAlbumError = success => {
  return { type: ALBUM.SAVE_ERROR, success };
};

export const createAlbum = payload => dispatch => {
  const config = {
    headers: authHeader()
  };

  return axios
    .post(
      'https://musicplayer-api-wal.herokuapp.com/api/v1/albums',
      payload,
      config
    )
    .then(json => {
      dispatch(createAlbumSuccess(json.data.success));
    })
    .catch(error => dispatch(createAlbumError(json.data.success)));
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
