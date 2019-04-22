import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import styles from './CreateTrack.css';
import routes from '../../constants/routes';

class CreateTrack extends Component {
  state = {
    name: '',
    minutes: '',
    seconds: '',
    genre: '',
    artistId: [1]
  };

  componentWillUnmount() {
    this.props.track.success = false;
  }

  saveTrack = e => {
    e.preventDefault();
    this.props.createTrack(this.state);
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { success } = this.props.track;

    return (
      <div>
        <Link to={routes.HOME}>
          <Button className="btn btn-primary btn-back">
            <i className="fas fa-arrow-left" />
          </Button>
        </Link>

        <div className={styles.newTrackContainer}>
          {success ? <Redirect to={{ pathname: '/home' }} /> : null}
          <h2 className={styles.newTrackTitle}>New Track</h2>
          <Form onSubmit={this.saveTrack}>
            <FormGroup>
              <Label for="track-name">Track Name</Label>
              <Input
                type="text"
                name="text"
                id="track-name"
                name="name"
                value={this.state.name}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="track-duration">Duration</Label>
              <div className="row">
                <div className="col-sm-6">
                  <Input
                    type="number"
                    name="text"
                    id="track-duration"
                    placeholder="Minutes"
                    name="minutes"
                    value={this.state.minutes}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-sm-6">
                  <Input
                    type="number"
                    name="text"
                    placeholder="Seconds"
                    id="track-duration-seconds"
                    name="seconds"
                    value={this.state.seconds}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="track-genre">Genre</Label>
              <Input
                type="select"
                name="text"
                id="track-genre"
                name="genre"
                onChange={this.changeHandler}
                value={this.state.genre}
              >
                <option value="rock">rock</option>
                <option value="jazz">jazz</option>
                <option value="pop">pop</option>
              </Input>
            </FormGroup>
            <Button color="primary">Save</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreateTrack;
