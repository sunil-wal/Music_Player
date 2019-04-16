import { TRACK } from '../constants/types';

const track = (state = {}, action) => {
  switch (action.type) {
    case TRACK.SAVE_SUCCESS:
      return {
        ...state
      };

    case TRACK.SAVE_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default track;
