import { userConstants } from '../constants';

const artistNames = ['arijit', 'sonu', 'neha', 'bapi', 'justin', 'rihana', 'linkin'];
const albumNames = ['kalank', 'kesari', 'gullyboy', 'simmba'];
const tracks = ['Old Town Road', 'Sunflower', '7 Rings', 'Wow'];
const plyalists = ['myfev', 'sunilfev', 'everyonesfev'];

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user} : {};

const musicData = {
  artistNames,
  albumNames,
  tracks,
  plyalists
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...musicData,
        isLoggedIn: false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...musicData,
        isLoggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...musicData,
        isLoggedIn: true,
      };
    case userConstants.LOGOUT:
      return {
        ...musicData,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
        ...musicData,
        isLoggedIn: false,
      }
  }
}

// const handlers = {
//   [userConstants.LOGIN_SUCCESS] : (state, action)=> ({
//     loggedIn: true,
//     user: action.user
//   }),
//   [userConstants.LOGIN_FAILURE] : {},
//   [userConstants.LOGOUT] : {}
// };

// export function authentication2(state = initialState, action) {

//   if(handlers[action.type]) {
//     return handlers[action.type](state, action);
//   }
//   return state;
// }
