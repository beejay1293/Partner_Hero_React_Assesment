<<<<<<< HEAD

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
=======
// const storage = require('redux-persist/lib/storage').default
import localforage from 'localforage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

localforage.config({
	driver: localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
	name: 'nasa potd',
	storeName: 'potd',
	version: 1.0,
	description: 'single page application which consumes NASAs Astronomy Picture of the Day (APOD) API to display the pictures of different days'
});

const persistConfig = {
	key: 'POTD',
	storage: localforage
};

let initStore;

initStore = createStore(
	persistReducer(persistConfig, rootReducer),
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

initStore.__PERSISTOR = persistStore(initStore);
export const store = initStore;
>>>>>>> f225af35b217137a98164ff38b4e539c669353be
