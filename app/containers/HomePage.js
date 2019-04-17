// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import CreateAlbum from '../components/albums/CreateAlbum';
import CreateArtist from '../components/artists/CreateArtist';
import CreateTrack from '../components/tracks/CreateTrack';
import Playlists from '../components/playlists/Playlists';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Home />;
  }
}
