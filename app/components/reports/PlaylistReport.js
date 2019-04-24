import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getArtistReport } from '../../services';
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
    const { artistname, artistTracksDuration, artistTracksCount } = this.props;

    const Data = {
      labels: artistname,
      datasets: [
        {
          label: 'Tracks Count',
          data: artistTracksCount,
          backgroundColor: [
            'rgba(255,105,145,0.6)',
            'rgba(155,100,210,0.6)',
            'rgba(90,178,255,0.6)',
            'rgba(240,134,67,0.6)',
            'rgba(120,120,120,0.6)',
            'rgba(250,55,197,0.6)'
          ]
        },
        {
          label: 'Tracks Duration',
          data: artistTracksDuration,
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
        <Link to="/home">
          <Button className="btn btn-primary btn-back">
            <i className="fas fa-arrow-left" />
          </Button>
        </Link>{' '}
        <Bar
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
  let artistname;
  let artistTracksDuration;
  let artistTracksCount;

  if (allTrackReport.artistsReport) {
    artistname = allTrackReport.artistsReport.map(data => data.name);
    artistTracksDuration = allTrackReport.artistsReport.map(
      data => data.artistTracksDuration
    );
    artistTracksCount = allTrackReport.artistsReport.map(
      data => data.artistTracksCount
    );
  }

  return {
    artistname,
    artistTracksDuration,
    artistTracksCount
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
          const result = await getArtistReport();

          dispatch({
            type: 'GETARTISTREPORTSUCCESS',
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
