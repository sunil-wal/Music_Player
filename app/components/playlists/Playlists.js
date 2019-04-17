import React, { Component } from 'react';
import { Table } from 'reactstrap';
import styles from './Playlists.css';

class Playlists extends Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    const { playlists, message } = this.props.playlists;

    if (message) {
      return <div>There was some error</div>;
    }

    return (
      <div className={styles.playlistsContainer}>
        <h2 className={styles.playlistsTitle}>Playlists</h2>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tracks #</th>
            </tr>
          </thead>
          <tbody>
            {playlists?.map(({ name, tracks }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{tracks.length}</td>
                </tr>
              );
            })}
            {message}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Playlists;
