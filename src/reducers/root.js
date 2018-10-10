import { combineReducers } from 'redux';
import weather from './weather';
import { Router, Route } from 'react-router';

export default combineReducers({
  weather,
});