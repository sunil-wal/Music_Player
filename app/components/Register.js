// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.css';
import routes from '../constants/routes';

type Props = {};

export default class Register extends Component<Props> {
  props: Props;
  render() {
    return (
      <div className="main-div">
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.LOGIN}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <p>This is a test div</p>
      </div>
    );
  }
}
