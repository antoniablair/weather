import { combineReducers } from 'redux';
import gif from './gif';
import weather from './weather';
import { Router, Route } from 'react-router';

export default combineReducers({
  gif,
  weather,
});