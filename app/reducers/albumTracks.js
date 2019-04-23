import { ALBUMTRACKS } from '../constants/types';
const albumTracks = (state = {}, action) => {
  switch (action.type) {
    case ALBUMTRACKS.SUCCESS:
      return {
        ...state
      };

    case ALBUMTRACKS.ERROR:
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };

    default:
      return state;
  }
};

export default albumTracks;
