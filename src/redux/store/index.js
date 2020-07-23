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

