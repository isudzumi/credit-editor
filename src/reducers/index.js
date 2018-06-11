import { combineReducers } from 'redux';
import { MEMBERS } from '';
import inputs from './inputs';
import rowList from './rowList';

export default combineReducers({
  inputs,
  rowList
});
