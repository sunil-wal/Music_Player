import { ARTIST } from '../constants/types';
import validateArtist from '../validations/artistValidate';

const artist = (state = { name: '' }, action) => {
  switch (action.type) {
    case ARTIST.SAVE_SUCCESS:
      const { success } = action;

      return {
        ...state,
        success
      };

    case ARTIST.SAVE_ERROR:
      // const { message } = action;

      return {
        ...state
      };
    case ARTIST.SUCCESS:
      const { rows, count } = action.artist;

      return {
        ...state,
        allArtist: {
          rows: rows.map(data => data.name),
          count,
          name: 'artists'
        }
      };

    case ARTIST.ERROR:
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };
    case ARTIST.VALIDATION_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ARTIST.NAME_EDIT:
      return {
        ...state,
        name: action.name
      };
    case ARTIST.FORM_RESET:
      return {
        ...state,
        name: '',
        error: null
      };
    default:
      return state;
  }
};

export default artist;
