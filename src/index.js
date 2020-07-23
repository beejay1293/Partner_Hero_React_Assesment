import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/displayImage';
import "react-toastify/dist/ReactToastify.css";
import './styles/tailwind.css'
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={store.__PERSISTOR}
      loading={<div>{console.log('loading...')}</div>}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

