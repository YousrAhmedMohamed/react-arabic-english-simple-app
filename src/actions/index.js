
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CHANGE_BASED_NUMBER = 'CHANGE_BASED_NUMBER';


export const getListSuccess = (data) => ({
  type: GET_LIST_SUCCESS,
  data
});

export const languageChanged = (data) => ({
  type: CHANGE_LANGUAGE,
  data
});

export const basedNumberChanged = (data) => ({
  type: CHANGE_BASED_NUMBER,
  data
});