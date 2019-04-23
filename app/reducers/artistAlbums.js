import { ARTISTALBUM } from '../constants/types';
const artistAlbums = (state = { albumsByArtist: [] }, action) => {
  switch (action.type) {
    case ARTISTALBUM.SUCCESS:
      console.log('payload in reducer', action.payload);
      return {
        ...state,
        albumsByArtist: action.payload
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
