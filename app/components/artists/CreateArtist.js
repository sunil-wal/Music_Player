import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import styles from './CreateArtist.css';
import routes from '../../constants/routes';

class CreateArtist extends Component {
  state = {
    name: ''
  };

  componentWillUnmount() {
    this.props.artist.success = false;
  }

  saveArtist = e => {
    e.preventDefault();
    this.props.createArtist(this.state);
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
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
                value={this.state.name}
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

export default CreateArtist;
