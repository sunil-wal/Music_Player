import { ALBUM } from '../constants/types';

const album = (state = {}, action) => {
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

export default album;
