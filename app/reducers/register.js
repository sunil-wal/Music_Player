// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/register';
import type { Action } from './types';

export default function register(state: number = 0, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
