import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
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
