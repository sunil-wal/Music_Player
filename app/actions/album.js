import { ALBUM } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const validateAlbumNew = album => {
  return { type: ALBUM.VALIDATE, album };
};

export const albumErrors = error => {
  return { type: ALBUM.VALIDATION_ERROR, error };
};

export const resetAlbumForm = () => {
  return { type: ALBUM.FORM_RESET };
};

export const albumNameEdit = name => {
  return { type: ALBUM.NAME_EDIT, name };
};

export const albumLaunchDateEdit = launchDate => {
  return { type: ALBUM.LAUNCH_DATE_EDIT, launchDate };
};

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

  const album = {
    name: payload.name
  };

  if (album.launchDate) {
    album.launchDate = payload.launchDate;
  }

  return axios
    .post(
      'https://musicplayer-api-wal.herokuapp.com/api/v1/albums',
      album,
      config
    )
    .then(json => {
      dispatch(createAlbumSuccess(json.data.success));
      dispatch({ type: 'SUCCESS', payload: 'Successfully Album Created' });
    })
    .catch(error => {
      dispatch(createAlbumError(json.data.success));
      dispatch({ type: 'ERROR', payload: 'Opps! Album is not created' });
    });
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
