// @flow
//import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/register';
import type { Action } from './types';
import { userConstants } from '../constants';

export default function register(state: {} = {}, action) {
  console.log('akjshdkas');
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
