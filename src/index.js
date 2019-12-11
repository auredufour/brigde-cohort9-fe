import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./redux/Store";
import 'semantic-ui-css/semantic.min.css'
import { init as initPretender } from './pretender/index';

// TODO: make this just occur in development
// TURN THIS OFF TO QUERY API, THIS IS GREAT IF API IS DOWN
initPretender();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
