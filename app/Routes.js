import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import NewAlbumPage from './containers/NewAlbumPage';
import NewArtistPage from './containers/NewArtistPage';
import NewTrackPage from './containers/NewTrackPage';
import PlaylistsPage from './containers/PlaylistsPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.NEW_ALBUM} component={NewAlbumPage} />
      <Route path={routes.NEW_ARTIST} component={NewArtistPage} />
      <Route path={routes.NEW_TRACK} component={NewTrackPage} />
      <Route path={routes.PLAYLISTS} component={PlaylistsPage} />
    </Switch>
  </App>
);
