import { TRACK } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const validateTrack = track => {
  return { type: TRACK.VALIDATE, track };
};

export const trackValidationErrors = error => {
  return { type: TRACK.VALIDATION_ERROR, error };
};

export const resetTrackForm = () => {
  return { type: TRACK.FORM_RESET };
};

export const createTrackSuccess = success => {
  return { type: TRACK.SAVE_SUCCESS, success };
};

export const createTrackError = success => {
  return { type: TRACK.SAVE_ERROR, success };
};

export const createTrack = payload => dispatch => {
  const config = {
    headers: authHeader()
  };
  return axios
    .post(
      'https://musicplayer-api-wal.herokuapp.com/api/v1/tracks',
      payload,
      config
    )
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
