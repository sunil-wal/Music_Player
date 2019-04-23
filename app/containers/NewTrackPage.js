import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateTrack from '../components/tracks/CreateTrack';
import * as trackActions from '../actions/track';
import { TRACK } from '../constants/types';
import validateTrack from '../validations/trackValidate';

function mapStateToProps(state) {
  return {
    track: state.track
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTrack: () => {
      dispatch((dispatch, getState) => {
        const track = getState().track;
        const validation = validateTrack(track);
        const newTrack = {
          name: track.name,
          artistId: track.artistId,
          genre: track.genre,
          duration: parseInt(track.minutes)
        };

        if (
          validation.error &&
          (validation.error.name || validation.error.minutes)
        ) {
          dispatch(trackActions.trackValidationErrors(validation.error));
        } else {
          dispatch(trackActions.createTrack(newTrack));
        }
      });
    },
    trackNameEdit: name => {
      dispatch({ type: TRACK.NAME_EDIT, name });
    },
    trackMinutesEdit: minutes => {
      dispatch({ type: TRACK.MINUTES_EDIT, minutes });
    },
    trackSecondsEdit: seconds => {
      dispatch({ type: TRACK.SECONDS_EDIT, seconds });
    },
    trackGenreEdit: genre => {
      dispatch({ type: TRACK.GENRE_EDIT, genre });
    },
    resetTrackForm: () => {
      dispatch({ type: TRACK.FORM_RESET });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTrack);
