
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist';



export const initStore = (initialState = {}) => {
  let store;

    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'nasa_potd',
      storage
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      composeWithDevTools(applyMiddleware(thunk))
    );
     store.__PERSISTOR = persistStore(store);


    return store
};