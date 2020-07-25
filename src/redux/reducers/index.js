import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pictures from './pictures';


const appReducer = combineReducers({
  router: routerReducer,
  pictures
});


export default (state, action) => appReducer(state, action);
