import { TRACK } from '../constants/types';
import * as axios from 'axios';

export const createTrackSuccess = success => {
  return { type: TRACK.SAVE_SUCCESS, success };
};

export const createTrackError = success => {
  return { type: TRACK.SAVE_ERROR, success };
};

export const createTrack = payload => dispatch => {
  return axios
    .post('http://localhost:3000/track', payload)
    .then(json => {
      dispatch(createTrackSuccess(json.data.success));
    })
    .catch(error => dispatch(createTrackError(json.data.success)));
};
