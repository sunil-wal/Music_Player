// @flow
import { combineReducers } from 'redux';
import counter from './counter';
import register from './register';
import { authentication } from './authentication.reducer';
import {updatePlaylists, newPlaylists} from './playlist';
import album from './album';
import artist from './artist';
import track from './track';

const rootReducer = combineReducers({
  counter,
  register,
  authentication,
  newPlaylists,
  updatePlaylists,
  album,
  artist,
  track
});

export default rootReducer;
