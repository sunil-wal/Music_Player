import { TRACK } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

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

export const getTrackSuccess = track => {
  return { type: TRACK.SUCCESS, track };
};

export const getTrackError = error => {
  return { type: TRACK.ERROR, message: error.message };
};

export const getTrack = () => dispatch => {
  const headerData = {
    headers: authHeader()
  };
  console.log(headerData);
  return axios
    .get('https://musicplayer-api-wal.herokuapp.com/api/v1/tracks', headerData)
    .then(json => {
      dispatch(getTrackSuccess(json.data.tracks));
    })
    .catch(error => dispatch(getTrackError(error)));
};
