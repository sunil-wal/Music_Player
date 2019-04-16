import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './CreateTrack.css';

class CreateTrack extends Component {
  state = {
    name: '',
    minutes: '',
    seconds: '',
    genre: ''
  };

  saveTrack = e => {
    e.preventDefault();
    this.props.createTrack(this.state);

    this.setState({
      name: '',
      minutes: '',
      seconds: '',
      genre: ''
    });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.newTrackContainer}>
        <h2 className={styles.newTrackTitle}>New Track</h2>
        <Form onSubmit={this.saveTrack}>
          <FormGroup>
            <Label for="track-name">Track Name</Label>
            <Input
              type="text"
              name="text"
              id="track-name"
              name="name"
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
            >
              <option>rock</option>
              <option>jazz</option>
              <option>pop</option>
            </Input>
          </FormGroup>
          <Button>Save</Button>
        </Form>
      </div>
    );
  }
}

export default CreateTrack;
