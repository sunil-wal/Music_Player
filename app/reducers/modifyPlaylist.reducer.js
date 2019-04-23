const modifyPlaylist = (state = {}, action) => {
  switch (action.type) {
    case 'ADDSONGBYID':
      return {
        ...state,
        ...action.payload
      };
    case 'UPDATEMODALSTATE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default modifyPlaylist;
