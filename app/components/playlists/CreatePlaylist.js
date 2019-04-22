import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

class CreatePlaylist extends Component {
  state = {
    playlistName: ''
  };

  savePlaylist = e => {
    e.preventDefault();
    this.props.createPlaylist(this.state);

    this.setState({
      playlistName: ''
    });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { message } = this.props.newPlaylists;
    return (
      <div>
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
