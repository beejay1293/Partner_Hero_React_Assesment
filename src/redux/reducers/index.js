import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products';
import merchant from './merchant';
import customer from './customer';
import category from './category';

const appReducer = combineReducers({
  router: routerReducer,
  products,
  merchant,
  category,
  customer
});


export default (state, action) => appReducer(state, action);
