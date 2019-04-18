import { ALBUM } from '../constants/types';

const album = (state = {}, action) => {
  switch (action.type) {
    case ALBUM.SAVE_SUCCESS:
      return {
        ...state,
        message: action.message
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
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };
    default:
      return state;
  }
};

export default album;
