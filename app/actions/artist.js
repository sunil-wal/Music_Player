import { ARTIST } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const validateArtist = artist => {
  return { type: ARTIST.VALIDATE, artist };
};

export const artistValidationErrors = error => {
  return { type: ARTIST.VALIDATION_ERROR, error };
};

export const resetArtistForm = () => {
  return { type: ARTIST.FORM_RESET };
};

export const createArtistSuccess = success => {
  return { type: ARTIST.SAVE_SUCCESS, success };
};

export const createArtistError = success => {
  return { type: ARTIST.SAVE_ERROR, success };
};

export const createArtist = payload => dispatch => {
  const config = {
    headers: authHeader()
  };

  return axios
    .post(
      'https://musicplayer-api-wal.herokuapp.com/api/v1/artists',
      payload,
      config
    )
    .then(json => {
      dispatch(createArtistSuccess(json.data.success));
      dispatch({ type: 'SUCCESS', payload: 'Successfully Artist Created' });
    })
    .catch(error => {
      dispatch(createArtistError(json.data.success));
      dispatch({ type: 'ERROR', payload: 'Opps! Artist is not created' });
    });
};

export const getArtistSuccess = artist => {
  return { type: ARTIST.SUCCESS, artist };
};

export const getArtistError = json => {
  return { type: ARTIST.ERROR, message: json.data.success };
};

export const getArtist = () => dispatch => {
  const headerData = {
    headers: authHeader()
  };
  console.log(headerData);
  return axios
    .get('https://musicplayer-api-wal.herokuapp.com/api/v1/artists', headerData)
    .then(json => {
      dispatch(getArtistSuccess(json.data.artists));
    })
    .catch(error => dispatch(getArtistError(error)));
};
