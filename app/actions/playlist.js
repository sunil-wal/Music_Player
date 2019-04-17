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
