import { ARTIST } from '../constants/types';

const artist = (state = {}, action) => {
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
      const { rows } = action.artist;

      return {
        ...state,
        allArtist: rows.map(data => data.name)
      };

    case ARTIST.ERROR:
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };
    default:
      return state;
  }
};

export default artist;
