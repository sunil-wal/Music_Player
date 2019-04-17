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
