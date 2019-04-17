// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Login</h2>
        <Link to={routes.NEW_ALBUM}>New Album</Link>
        <Link to={routes.NEW_ARTIST}>New Artist</Link>
        <Link to={routes.NEW_TRACK}>New Track</Link>
        <Link to={routes.NEW_TRACK}>New Track</Link>
        <Link to={routes.PLAYLISTS}>Playlists</Link>
        <Link to={routes.REGISTER}>
          Not an existing user!!! Create a new account.
        </Link>
      </div>
    );
  }
}
