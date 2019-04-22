import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Playlists.css';

class CreatePlaylist extends Component {
  state = {
    playlistName: ''
  };

  savePlaylist = e => {
    e.preventDefault();
    this.props.createPlaylist({ name: this.state.playlistName });

    this.setState({
      playlistName: ''
    });
  };

  changeHandler = e => {
    const value = e.target.value;

    this.setState({ playlistName: value });
  };

  render() {
    const { message } = this.props.newPlaylists;
    return (
      <div className={styles.playlistsContainer}>
        <div className="text-left">
          <Link to={routes.HOME}>
            <Button color="primary"> Back </Button>
          </Link>
        </div>
        {message ? <Alert color="success">{message}</Alert> : null}
        <h3>New Playlist</h3>
        <Form onSubmit={this.savePlaylist}>
          <FormGroup>
            <Label for="playlist-name">Playlist Name</Label>
            <Input
              type="text"
              name="playlistName"
              id="playlist-name"
              value={this.state.playlistName}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button color="primary">Save</Button>
        </Form>
      </div>
    );
  }
}

export default CreatePlaylist;
