import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import styles from './CreateArtist.css';

class CreateArtist extends Component {
  state = {
    artistName: ''
  };

  saveArtist = e => {
    e.preventDefault();
    this.props.createArtist(this.state);

    this.setState({
      artistName: ''
    });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { message } = this.props.artist;
    return (
      <div className={styles.newArtistContainer}>
        {message ? <Alert color="success">{message}</Alert> : null}
        <h2 className={styles.newArtistTitle}>New Artist</h2>
        <Form onSubmit={this.saveArtist}>
          <FormGroup>
            <Label for="artist-name">Artist Name</Label>
            <Input
              type="text"
              name="artistName"
              id="artist-name"
              value={this.state.artistName}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button>Save</Button>
        </Form>
      </div>
    );
  }
}

export default CreateArtist;
