import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateAlbum from '../components/albums/CreateAlbum';
import * as albumActions from '../actions/album';
import validateAlbum from '../validations/albumValidate';
import { ALBUM } from '../constants/types';

function mapStateToProps(state) {
  return {
    album: state.album
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createAlbum: () => {
      dispatch((dispatch, getState) => {
        const album = getState().album;
        const validation = validateAlbum(album);

        if (validation.error) {
          dispatch(albumActions.albumErrors(validation.error));
        } else {
          dispatch(albumActions.createAlbum(album));
        }
      });
    },
    albumNameEdit: name => {
      dispatch({ type: ALBUM.NAME_EDIT, name });
    },
    albumLaunchDateEdit: launchDate => {
      dispatch({ type: ALBUM.LAUNCH_DATE_EDIT, launchDate });
    },
    resetAlbumForm: () => {
      dispatch({ type: ALBUM.FORM_RESET });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbum);
