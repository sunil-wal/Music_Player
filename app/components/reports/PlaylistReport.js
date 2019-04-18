import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { Table } from 'reactstrap';
import ReactSvgPieChart from 'react-svg-piechart';

const data = [
  { title: 'Artist', value: 100, color: '#22594e' },
  { title: 'Songs', value: 60, color: '#2f7d6d' },
  { title: 'Genre', value: 30, color: '#3da18d' },
  { title: '# of Songs', value: 20, color: '#69c2b0' }
];

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
        <ReactSvgPieChart
          data={data}
          expandSize={50}
          onSectorHover={(d, i, e) => {
            if (d) {
              console.log('Mouse enter - Index:', i, 'Data:', d, 'Event:', e);
            } else {
              console.log('Mouse leave - Index:', i, 'Event:', e);
            }
          }}
        />
      </div>
    );
  }
}
export default PlaylistReport;
