import { TRACK } from '../constants/types';
import * as axios from 'axios';

export const createTrackSuccess = message => {
  return { type: TRACK.SAVE_SUCCESS, message };
};

export const createTrackError = error => {
  return { type: TRACK.SAVE_ERROR, message: error.message };
};

export const createTrack = payload => dispatch => {
  return axios
    .post('http://localhost:3000/track', payload)
    .then(json => {
      dispatch(createTrackSuccess(json.data.message));
    })
    .catch(error => dispatch(createTrackError(error)));
};
