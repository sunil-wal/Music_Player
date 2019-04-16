// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import playlists from './playlist';
import album from './album';
import artist from './artist';
import track from './track';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    counter,
    playlists,
    album,
    artist,
    track
  });
}
