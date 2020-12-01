
import store from '../store';
import * as actions from '../actions';

export function getList() {
  return fetch('http://api.emiratesauction.com/v2/phrases?source=mweb')
    .then(data => data.json().then(
      (result) => store.dispatch(actions.getListSuccess(result.Phrases))
    ))
}