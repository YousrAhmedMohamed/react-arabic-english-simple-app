import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import initialState from './initialState';
import rootReducer from '../reducer';
export const history = createBrowserHistory();
export default createStore(rootReducer(history), initialState)
