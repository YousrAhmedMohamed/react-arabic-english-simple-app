import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { Provider } from 'react-redux';
import store from './store';


const mountNode = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  mountNode
);