import { ARTISTALBUM } from '../constants/types';
const artistAlbums = (state = {}, action) => {
  switch (action.type) {
    case ARTISTALBUM.SUCCESS:
      return {
        ...state
      };

    case ARTISTALBUM.ERROR:
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };

    default:
      return state;
  }
};

export default artistAlbums;
