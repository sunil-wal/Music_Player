import { ALBUMTRACKS } from '../constants/types';
const albumTracks = (state = { tracksByAlbum: [] }, action) => {
  switch (action.type) {
    case ALBUMTRACKS.SUCCESS:
      return {
        ...state,
        tracksByAlbum: action.payload
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
