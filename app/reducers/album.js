import { ALBUM } from '../constants/types';

export const album = (state = {}, action) => {
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
        allAlbum: {
          rows: rows.map(data => ({
            name: data.name,
            id: data.id
          })),
          count,
          name: 'albums'
        }
      };

    case ALBUM.ERROR:
      const errorMessage = action.success;

      return {
        ...state,
        success: errorMessage
      };
    default:
      return state;
  }
};

export const tracksByAlbumId = (state = { trackIds: [] }, action) => {
  switch (action.type) {
    case 'GETTRACKSBYALBUMIDSUCCESS':
      return {
        ...state,
        trackIds: action.payload
      };

    case 'GETTRACKSBYALBUMIDERROR':
      return {
        ...state,
        message: action.payload
      };

    default:
      return state;
  }
};
