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
    case TRACK.SUCCESS:
      const { rows, count } = action.track;

      return {
        ...state,
        allTrack: {
          rows: rows.map(data => ({
            name: data.name,
            id: data.id
          })),
          count,
          name: 'tracks'
        }
      };

    case TRACK.ERROR:
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };
    default:
      return state;
  }
};

export default track;
