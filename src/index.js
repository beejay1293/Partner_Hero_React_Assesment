import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
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

>>>>>>> f225af35b217137a98164ff38b4e539c669353be
