import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreatePlaylist from '../components/playlists/CreatePlaylist';
import * as PlaylistActions from '../actions/playlist';

function mapStateToProps(state) {
  return {
    newPlaylists: state.newPlaylists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePlaylist);
