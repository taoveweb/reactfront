import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import shareReducer from './shareReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  shareReducer,

});

export default rootReducer;
