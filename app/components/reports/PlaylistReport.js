import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { Table } from 'reactstrap';

class PlaylistReport extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-1x" /> <span>Back to Home</span>
        </Link>
        <h1>Playlist Report</h1>
        <hr />
        <Table>
          <thead>
            <tr>
              <th>Artists</th>
              <th>Songs</th>
              <th>Genre</th>
              <th>No. of Songs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">John Doe</th>
              <td>Mark</td>
              <td>Pop</td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default PlaylistReport;
