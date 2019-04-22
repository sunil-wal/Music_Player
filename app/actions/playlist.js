import { PLAYLIST } from '../constants/types';
import * as axios from 'axios';
import { authHeader } from '../helpers';

export const getPlaylistsSuccess = playlists => {
  return { type: PLAYLIST.SUCCESS, playlists };
};

export const getPlaylistsError = error => {
  return { type: PLAYLIST.ERROR, message: error.message };
};

export const getPlaylists = () => dispatch => {
  const config = {
    headers: authHeader()
  };
  return axios
    .get('https://musicplayer-api-wal.herokuapp.com/api/v1/playlists', config)
    .then(json => {
      dispatch(getPlaylistsSuccess(json.data.playlists));
    })
    .catch(error => dispatch(getPlaylistsError(error)));
};

// create playlist actions
export const createPlaylistSuccess = message => {
  return { type: PLAYLIST.SAVE_SUCCESS, message };
};

export const createPlaylistError = error => {
  return { type: PLAYLIST.SAVE_ERROR, message: error.message };
};

export const createPlaylist = payload => dispatch => {
  const config = {
    headers: authHeader()
  };
  return axios
    .post(
      'https://musicplayer-api-wal.herokuapp.com/api/v1/playlists',
      payload,
      config
    )
    .then(json => {
      dispatch(createPlaylistSuccess(json.data.message));
    })
    .catch(error => dispatch(createPlaylistError(error)));
};
