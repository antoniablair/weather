import { combineReducers } from 'redux';
import { Router, Route } from 'react-router';

import weather from './weather';

export default combineReducers({
  weather,
});