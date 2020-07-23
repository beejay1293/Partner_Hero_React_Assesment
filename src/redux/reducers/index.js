import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products';

const appReducer = combineReducers({
  router: routerReducer,
  products,
});


export default (state, action) => appReducer(state, action);
