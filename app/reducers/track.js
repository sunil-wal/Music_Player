import { TRACK } from '../constants/types';

export const track = (state = {}, action) => {
  switch (action.type) {
    case TRACK.SAVE_SUCCESS:
      return {
        ...state,
        success: action.success
      };

    case TRACK.SAVE_ERROR:
      return {
        ...state,
        success: action.success
      };
    case TRACK.SUCCESS:
      const { rows, count } = action.track;

      return {
        ...state,
        allTrack: {
          rows: rows.map(data => ({
            name: data.name,
            id: data.id,
            genre: data.genre
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

export const trackByPlaylistId = (
  state = { allTrackByPlaylistId: ['abc'] },
  action
) => {
  switch (action.type) {
    case 'TRACKBYPLAYLISTIDSUCCESS':
      return {
        ...state,
        allTrackByPlaylistId: action.payload.map(data => data.name)
      };

    case 'TRACKBYPLAYLISTIDERROR':
      const errorMessage = action.message;

      return {
        ...state,
        message: errorMessage
      };
    default:
      return state;
  }
};
