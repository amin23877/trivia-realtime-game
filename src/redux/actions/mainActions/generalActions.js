// #redux step6
import axios from "axios";
import { BASE_URL } from "common/values/CORE";
import { actionsTypeGeneral } from "./actionsType";
const baseUrl = BASE_URL;

export const SET_USER_INFO = (payload) => {
	return { type: actionsTypeGeneral.SET_USER_INFO, payload };
};

export const SET_SPINNER = (payload) => {
	return { type: actionsTypeGeneral.SET_SPINNER, payload };
};

export const SET_SNACKBAR = (payload) => {
	return {
		type: actionsTypeGeneral.SET_SNACKBAR,
		payload,
	};
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

export const TOGGLE_NOTIF_DRAWER = () => {
	return {
		type: actionsTypeGeneral.TOGGLE_NOTIF_DRAWER,
	};
};
