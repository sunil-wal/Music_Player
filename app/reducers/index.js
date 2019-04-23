// @flow
import { combineReducers } from 'redux';
import counter from './counter';
import register from './register';
import { authentication } from './authentication.reducer';
import { updatePlaylists, newPlaylists } from './playlist';
import { album, tracksByAlbumId } from './album';
import artist from './artist';
import { track, trackByPlaylistId } from './track';
import modifyPlaylist from './modifyPlaylist.reducer';

const rootReducer = combineReducers({
  counter,
  register,
  authentication,
  newPlaylists,
  updatePlaylists,
  album,
  artist,
  track,
  modifyPlaylist,
  trackByPlaylistId,
  tracksByAlbumId
});

export default rootReducer;
