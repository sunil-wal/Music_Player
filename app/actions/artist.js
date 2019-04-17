import { ARTIST } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const createArtistSuccess = message => {
  return { type: ARTIST.SAVE_SUCCESS, message };
};

export const createArtistError = error => {
  return { type: ARTIST.SAVE_ERROR, message: error.message };
};

export const createArtist = payload => dispatch => {
  return axios
    .post('http://localhost:3000/artist', payload)
    .then(json => {
      dispatch(createArtistSuccess(json.data.message));
    })
    .catch(error => dispatch(createArtistError(error)));
};

export const getArtistSuccess = artist => {
  return { type: ARTIST.SUCCESS, artist };
};

export const getArtistError = error => {
  return { type: ARTIST.ERROR, message: error.message };
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
