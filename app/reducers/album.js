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

    default:
      return state;
  }
};

export default album;
