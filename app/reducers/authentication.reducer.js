import { userConstants } from '../constants';
import loginValidation from '../validations/loginValidate';

let addButton = false;

// const defaultState = {
//   activeTab: '1',
//   searchText: ''
// };

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isAdmin: action.user.userRole == 'admin' ? true : false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: action.user.userRole == 'admin' ? true : false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isAdmin: action.user.userRole == 'admin' ? true : false,
        isLoggedIn: false
      };
    case 'LOGIN_VALIDATE':
      return {
        ...state,
        ...loginValidation(action.payload)
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return {
        ...state
      };
  }
}

export function requestStatus(state = { success: '', error: '' }, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        success: action.payload
        // error: ''
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
        // success: ''
      };
    default:
      return {
        ...state
      };
  }
}
