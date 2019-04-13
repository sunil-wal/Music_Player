// @flow
import { combineReducers } from 'redux';
import counter from './counter';
import register from './register';

const rootReducer = combineReducers({
  counter,
  register
});

export default rootReducer;
