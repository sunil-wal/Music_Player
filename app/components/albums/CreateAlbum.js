import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import styles from './CreateAlbum.css';

class CreateAlbum extends Component {
  state = {
    name: '',
    launchDate: ''
  };

  saveAlbum = e => {
    e.preventDefault();
    this.props.createAlbum(this.state);

    this.setState({
      name: '',
      launchDate: ''
    });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { success } = this.props.album;

    return (
      <div className={styles.newAlbumContainer}>
        {success ? <Redirect to={{ pathname: '/home' }} /> : null}
        <h2 className={styles.newAlbumTitle}>New Album</h2>
        <Form onSubmit={this.saveAlbum}>
          <FormGroup>
            <Label for="album-name">Name</Label>
            <Input
              type="text"
              name="name"
              id="album-name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="album-launch-date">Launch Date</Label>
            <Input
              type="date"
              name="launchDate"
              id="album-launch-date"
              value={this.state.launchDate}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button color="primary">Save</Button>
        </Form>
      </div>
    );
  }
}

export default CreateAlbum;
