import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import styles from './CreateArtist.css';
import routes from '../../constants/routes';

class CreateArtist extends Component {
  componentWillUnmount() {
    this.props.artist.success = false;
    this.props.resetArtistForm();
  }

  saveArtist = e => {
    e.preventDefault();
    this.props.createArtist(this.props.artist);
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'name') {
      this.props.artistNameEdit(value);
    }
  };

  render() {
    const { success } = this.props.artist;

    return (
      <div>
        <Link to={routes.HOME}>
          <Button className="btn btn-primary btn-back">
            <i className="fas fa-arrow-left" />
          </Button>
        </Link>
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
                value={this.props.artist.name}
                onChange={this.changeHandler}
              />
              {this.props.artist.error && (
                <Label className="error-label">{this.props.artist.error}</Label>
              )}
            </FormGroup>
            <Button color="primary">Save</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreateArtist;
