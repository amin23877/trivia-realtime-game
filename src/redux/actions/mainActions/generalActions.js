// #redux step6
import axios from "axios";
import { BASE_URL } from "common/values/CORE";
import { actionsTypeGeneral } from "./actionsType";
const baseUrl = BASE_URL;
export const SET_USER_INFO = (payload) => {
	return { type: actionsTypeGeneral.SET_USER_INFO, payload };
};

export const SET_MODALS = (payload) => {
	// #modalRedux step2
	return {
		type: actionsTypeGeneral.SET_MODALS,
		payload,
	};
};
export const GET_CATEGORIES_LIST = (token) => async (dispatch) => {
	let cats = await axios.get(baseUrl + "category", {
		headers: { Authorization: token },
	});
	dispatch({ type: actionsTypeGeneral.GET_CATEGORIES_LIST, payload: cats.data });
};

export const SET_OPEN_GAME_TYPES = (payload) => {
	return {
		type: actionsTypeGeneral.SET_OPEN_GAME_TYPES,
		payload,
	};
};
