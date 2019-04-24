import React, { Component } from 'react';

import { HorizontalBar } from 'react-chartjs-2';

import { connect } from 'react-redux';

import { getTrackReport } from '../../services';
import styles from './PlaylistReport.css';

class PlaylistReport extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { trackname, trackscore } = this.props;

    const Data = {
      labels: trackname,
      datasets: [
        {
          label: 'Tracks Report',
          data: trackscore,
          backgroundColor: [
            'rgba(255,105,145,0.6)',
            'rgba(155,100,210,0.6)',
            'rgba(90,178,255,0.6)',
            'rgba(240,134,67,0.6)',
            'rgba(120,120,120,0.6)',
            'rgba(250,55,197,0.6)'
          ]
        }
      ]
    };

    return (
      <div className={styles.PlayListStyle}>
        {' '}
        <HorizontalBar
          data={Data}
          options={{
            maintainAspectRatio: false
          }}
        />{' '}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { allTrackReport } = state;
  let trackname;
  let trackscore;

  if (allTrackReport.tracksReport) {
    trackname = allTrackReport.tracksReport.map(data => data.name);
    trackscore = allTrackReport.tracksReport.map(
      data => data.trackPlaylistsCount
    );
  }

  return {
    trackname,
    trackscore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData() {
      this.getData();
    },

    get getData() {
      return async () => {
        try {
          const result = await getTrackReport();

          dispatch({
            type: 'GETTRACKREPORTSUCCESS',
            payload: result
          });
        } catch (err) {
          dispatch({
            type: 'ERROR',
            payload: err.message
          });
        }
      };
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistReport);
