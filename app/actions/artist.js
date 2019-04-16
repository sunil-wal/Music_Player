import { ARTIST } from '../constants/types';
import * as axios from 'axios';

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
