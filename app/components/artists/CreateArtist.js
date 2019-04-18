import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import styles from './CreateArtist.css';

class CreateArtist extends Component {
  state = {
    name: ''
  };

  saveArtist = e => {
    e.preventDefault();
    this.props.createArtist(this.state);

    this.setState({
      name: ''
    });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { success } = this.props.artist;

    return (
      <div className={styles.newArtistContainer}>
        {success ? <Redirect to={{ pathname: '/home' }} /> : null}
        <h2 className={styles.newArtistTitle}>New Artist</h2>
        <Form onSubmit={this.saveArtist}>
          <FormGroup>
            <Label for="artist-name">Artist Name</Label>
            <Input
              type="text"
              name="name"
              id="artist-name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button color="primary">Save</Button>
        </Form>
      </div>
    );
  }
}

export default CreateArtist;
