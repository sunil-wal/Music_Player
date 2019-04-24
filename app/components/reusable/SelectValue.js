import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { getTracksByGenre } from '../../services';
import { TRACK } from '../../constants';

class SelectValue extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.props.loadData(selectedOption.value);
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.trackGenre}
        placeholder="Filter by genre"
      />
    );
  }
}
function mapStateToProps(state) {
  const { allTracks } = state;
  let trackGenre;
  let key = [];
  if (allTracks.tracks) {
    trackGenre = allTracks.tracks.rows.reduce((result, data) => {
      if (key.indexOf(data.genre) >= 0) {
        return result;
      }
      key.push(data.genre);
      result.push({ value: data.genre, label: data.genre });
      return result;
    }, []);
  }
  return {
    trackGenre
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadData(genre) {
      this.getTracks(genre);
    },
    get getTracks() {
      return async genre => {
        try {
          let track = await getTracksByGenre(genre);
          dispatch({ type: TRACK.SUCCESS, track });
        } catch (error) {
          dispatch({ type: TRACK.ERROR, message: error.message });
        }
      };
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectValue);
