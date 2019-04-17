import { PLAYLISTREPORT } from '../constants/types';
const playlistReport = (state = {}, action) => {
  switch (action.type) {
    case PLAYLISTREPORT.REPORT_SUCCESS:
      return {
        ...state
      };

    case PLAYLISTREPORT.REPORT_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default playlistReport;
