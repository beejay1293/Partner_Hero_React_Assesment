import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products';
<<<<<<< HEAD
import merchant from './merchant';
import customer from './customer';
import category from './category';
=======
>>>>>>> f225af35b217137a98164ff38b4e539c669353be

const appReducer = combineReducers({
  router: routerReducer,
  products,
<<<<<<< HEAD
  merchant,
  category,
  customer
=======
>>>>>>> f225af35b217137a98164ff38b4e539c669353be
});


export default (state, action) => appReducer(state, action);
