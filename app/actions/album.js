import { ALBUM } from '../constants/types';
import * as axios from 'axios';

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
