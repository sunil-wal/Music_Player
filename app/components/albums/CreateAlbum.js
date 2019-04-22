import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import styles from './CreateAlbum.css';
import routes from '../../constants/routes';

class CreateAlbum extends Component {
  state = {
    name: '',
    launchDate: '',
    artistIds: [1]
  };

  saveAlbum = e => {
    e.preventDefault();
    this.props.createAlbum(this.state);
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  componentWillUnmount() {
    this.props.album.success = false;
  }

  render() {
    const { success } = this.props.album;

    return (
      <div>
        <Link to={routes.HOME}>
          <Button className="btn btn-primary btn-back">
            <i className="fas fa-arrow-left" />
          </Button>
        </Link>
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
      </div>
    );
  }
}

export default CreateAlbum;
