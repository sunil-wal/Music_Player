import { ALBUM } from '../constants/types';
import validateAlbum from '../validations/albumValidate';

const album = (state = { name: '', launchDate: '' }, action) => {
  switch (action.type) {
    case ALBUM.SAVE_SUCCESS:
      return {
        ...state,
        success: action.success
      };

    case ALBUM.SAVE_ERROR:
      // const { message } = action;

      return {
        ...state
      };
    case ALBUM.SUCCESS:
      const { rows, count } = action.album;

      return {
        ...state,
        allAlbum: { rows: rows.map(data => data.name), count, name: 'albums' }
      };

    case ALBUM.ERROR:
      const errorMessage = action.success;

      return {
        ...state,
        success: errorMessage
      };
    case ALBUM.VALIDATION_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ALBUM.NAME_EDIT:
      return {
        ...state,
        name: action.name
      };
    case ALBUM.LAUNCH_DATE_EDIT:
      return {
        ...state,
        launchDate: action.launchDate
      };
    case ALBUM.FORM_RESET:
      return {
        ...state,
        name: '',
        launchDate: '',
        error: null
      };
    default:
      return state;
  }
};

export default album;
