import { ARTIST } from '../constants/types';

const artist = (state = {}, action) => {
  switch (action.type) {
    case ARTIST.SAVE_SUCCESS:
      const { message } = action;

      return {
        ...state,
        message
      };

    case ARTIST.SAVE_ERROR:
      // const { message } = action;

      return {
        ...state
      };

    default:
      return state;
  }
};

export default artist;
