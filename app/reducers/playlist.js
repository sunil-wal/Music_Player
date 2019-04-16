import { PLAYLIST } from '../constants/types';

const playlists = (state = {}, action) => {
  switch (action.type) {
    case PLAYLIST.SUCCESS:
      const { playlists } = action;

      return {
        ...state,
        playlists
      };

    case PLAYLIST.ERROR:
      const { message } = action;

      return {
        ...state,
        message
      };

    default:
      return state;
  }
};

export default playlists;
