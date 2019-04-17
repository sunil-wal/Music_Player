import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Playlists from '../components/playlists/Playlists';
import * as PlaylistActions from '../actions/playlist';

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists);
