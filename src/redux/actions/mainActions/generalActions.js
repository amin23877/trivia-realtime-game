// #redux step6
import axios from 'axios';
import { BASE_URL } from 'common/values/CORE';
import { actionsTypeGeneral } from './actionsType';
const baseUrl = BASE_URL;
const token = localStorage.getItem('token')
  ? `Bearer ${localStorage.getItem('token')}`
  : null;
export const SET_USER_INFO = (payload) => {
  return { type: actionsTypeGeneral.SET_USER_INFO, payload };
};

export const GET_CATEGORIES_LIST = () => async (dispatch) => {
  let cats = await axios.get(baseUrl + 'category', {
    headers: { Authorization: token },
  });
  dispatch({ type: actionsTypeGeneral.GET_CATEGORIES_LIST, payload: cats.data });
};
