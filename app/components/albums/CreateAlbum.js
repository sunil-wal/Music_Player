import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import styles from './CreateAlbum.css';
import routes from '../../constants/routes';

class CreateAlbum extends Component {
  saveAlbum = e => {
    e.preventDefault();
    this.props.createAlbum(this.props.album);
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'name') {
      this.props.albumNameEdit(value);
    } else {
      this.props.albumLaunchDateEdit(value);
    }
  };

  componentWillUnmount() {
    this.props.album.success = false;
    this.props.resetAlbumForm();
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
                value={this.props.album.name}
                onChange={this.changeHandler}
              />
              {this.props.album.error && (
                <Label className="error-label">{this.props.album.error}</Label>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="album-launch-date">Launch Date</Label>
              <Input
                type="date"
                name="launchDate"
                id="album-launch-date"
                value={this.props.album.launchDate}
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
