import { userConstants } from '../constants';

const artistNames = [
  'arijit',
  'sonu',
  'neha',
  'bapi',
  'justin',
  'rihana',
  'linkin'
];
const albumNames = ['kalank', 'kesari', 'gullyboy', 'simmba'];
const tracks = ['Old Town Road', 'Sunflower', '7 Rings', 'Wow'];
const playlists = ['myfev', 'sunilfev', 'everyonesfev'];
let addButton = false;

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const musicData = {
  artistNames,
  albumNames,
  tracks,
  playlists,
  addButton
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...musicData,
        isLoggedIn: false,
        isAdmin: action.user.userRole == 'admin' ? true : false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...musicData,
        isLoggedIn: true,
        isAdmin: action.user.userRole == 'admin' ? true : false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...musicData,
        isAdmin: action.user.userRole == 'admin' ? true : false,
        isLoggedIn: false
      };
    case userConstants.LOGOUT:
      return {
        ...musicData,
        isLoggedIn: false
      };
    default:
      return {
        ...state,
        ...musicData
      };
  }
}
