import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import routes from './constants/routes';
import { HomePage } from './components/HomePage';
import LoginPage from './components/Login';
import CounterPage from './containers/CounterPage';
import NewAlbumPage from './containers/NewAlbumPage';
import NewArtistPage from './containers/NewArtistPage';
import NewTrackPage from './containers/NewTrackPage';
import CreatePlaylist from './containers/NewPlaylistPage';
import PlaylistsPage from './containers/PlaylistsPage';
import RegisterPage from './containers/RegisterPage';
import Track from './components/Track';
// {isLoggedIn ? null : <Redirect to={routes.HOME} />}
// <Route path={routes.HOME} component={HomePage} />
class Routes extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;

    return (
      <Switch>
        <Route exact path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.REGISTER} component={RegisterPage} />
        <Route
          render={props => (
            <React.Fragment>
              {isLoggedIn ? null : <Redirect to={routes.LOGIN} />}

              <div className="primary-navigation-content">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path={routes.TRACK} component={Track} />
                  <Route path={routes.HOME} component={HomePage} />
                  <Route path={routes.COUNTER} component={CounterPage} />
                  <Route path={routes.NEW_ALBUM} component={NewAlbumPage} />
                  <Route path={routes.NEW_ARTIST} component={NewArtistPage} />
                  <Route
                    path={routes.NEW_PLAYLIST}
                    component={CreatePlaylist}
                  />
                  <Route path={routes.NEW_TRACK} component={NewTrackPage} />
                  <Route path={routes.PLAYLISTS} component={PlaylistsPage} />
                </Switch>
              </div>
            </React.Fragment>
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(Routes);
