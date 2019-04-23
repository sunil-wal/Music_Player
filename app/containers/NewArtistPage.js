import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateArtist from '../components/artists/CreateArtist';
import * as artistActions from '../actions/artist';
import { ARTIST } from '../constants';
import validateArtist from '../validations/artistValidate';

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createArtist: () => {
      dispatch((dispatch, getState) => {
        const artist = getState().artist;
        const validation = validateArtist(artist);
        const newArtist = { name: artist.name };

        if (validation.error) {
          dispatch(artistActions.artistValidationErrors(validation.error));
        } else {
          dispatch(artistActions.createArtist(newArtist));
        }
      });
    },
    artistNameEdit: name => {
      dispatch({ type: ARTIST.NAME_EDIT, name });
    },
    resetArtistForm: () => {
      dispatch({ type: ARTIST.FORM_RESET });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArtist);
