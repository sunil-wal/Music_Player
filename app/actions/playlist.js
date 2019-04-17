import { PLAYLIST } from '../constants/types';
import * as axios from 'axios';

export const getPlaylistsSuccess = playlists => {
  return { type: PLAYLIST.SUCCESS, playlists };
};

export const getPlaylistsError = error => {
  return { type: PLAYLIST.ERROR, message: error.message };
};

export const getPlaylists = () => dispatch => {
  return axios
    .get('http://localhost:3000/playlists')
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
  return axios
    .post('https://musicplayer-api-wal.herokuapp.com/api/v1/playlist', payload)
    .then(json => {
      dispatch(createPlaylistSuccess(json.data.message));
    })
    .catch(error => dispatch(createPlaylistError(error)));
};
