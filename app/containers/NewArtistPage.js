import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateArtist from '../components/artists/CreateArtist';
import * as ArtistActions from '../actions/artist';

function mapStateToProps(state) {
  return {
    artist: state.artist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArtistActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArtist);
