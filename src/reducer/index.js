import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import list from './list';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),list
});

export default rootReducer;