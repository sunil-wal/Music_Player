import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateTrack from '../components/tracks/CreateTrack';
import * as TrackActions from '../actions/track';

function mapStateToProps(state) {
  return {
    track: state.track
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TrackActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTrack);
