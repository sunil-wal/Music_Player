import { TRACK } from '../constants/types';
import validateTrack from '../validations/trackValidate';

export const track = (
  state = { name: '', minutes: '', seconds: '', genre: 'rock', artistId: 1 },
  action
) => {
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
    case TRACK.VALIDATE:
      return {
        ...state,
        ...validateTrack(action.track)
      };

    case TRACK.VALIDATION_ERROR:
      return {
        ...state,
        error: action.error
      };

    case TRACK.NAME_EDIT:
      return {
        ...state,
        name: action.name
      };
    case TRACK.MINUTES_EDIT:
      return {
        ...state,
        minutes: action.minutes
      };
    case TRACK.SECONDS_EDIT:
      return {
        ...state,
        seconds: action.seconds
      };
    case TRACK.GENRE_EDIT:
      return {
        ...state,
        genre: action.genre
      };
    case TRACK.FORM_RESET:
      return {
        ...state,
        name: '',
        minutes: '',
        seconds: '',
        genre: 'rock',
        artistId: 1,
        error: {}
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
