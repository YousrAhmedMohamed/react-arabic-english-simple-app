import * as actionTypes from '../actions';
import initialState from '../store/initialState';

const list = (state = initialState.list, action) => {

  switch (action.type) {
    case actionTypes.GET_LIST_SUCCESS:
      {
        return {
          ...state,
          list: action.data
        };
      }

    case actionTypes.CHANGE_LANGUAGE:
      {
        return {
          ...state,
          rabic: action.data
        };
      }
      
    case actionTypes.CHANGE_BASED_NUMBER:
      return {
        ...state,
        basedNumber: action.data
      }

    default:
      return state;
  }


}
export default list;