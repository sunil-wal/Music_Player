// @flow
import { combineReducers } from 'redux';
import counter from './counter';
import register from './register';
import  { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
  counter,
  register,
  authentication
});

export default rootReducer;
