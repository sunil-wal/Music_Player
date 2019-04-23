import { PLAYLIST } from '../constants/types';

export const updatePlaylists = (state = {}, action) => {
  switch (action.type) {
    case PLAYLIST.SUCCESS:
      const { playlists } = action;

      return {
        ...state,
        allPlaylists: {
          rows: playlists.rows.map(data => ({
            name: data.name,
            id: data.id,
            playlistTracks: data.playlistTracks
          })),
          count: playlists.count,
          name: 'playlists'
        }
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

export const newPlaylists = (state = {}, action) => {
  switch (action.type) {
    case PLAYLIST.SAVE_SUCCESS:
      const { message } = action;

      return {
        ...state,
        message
      };

    case PLAYLIST.SAVE_ERROR:
      // const { message } = action;

      return {
        ...state
      };

    default:
      return state;
  }
};
