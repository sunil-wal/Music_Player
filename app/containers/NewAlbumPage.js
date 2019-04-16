import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateAlbum from '../components/albums/CreateAlbum';
import * as AlbumActions from '../actions/album';

function mapStateToProps(state) {
  return {
    album: state.album
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AlbumActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbum);
