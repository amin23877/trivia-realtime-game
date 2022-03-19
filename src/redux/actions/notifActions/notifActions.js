import { notifActionTypes as types } from "redux/actions/notifActions/actionsType";

export const FETCH_STATUS = (status, payload) => {
	let type = types["FETCH_" + status.toUpperCase()];
	if (!type) throw new Error('status must be one of these values : "error", "success", "loading"');

	return { type, payload };
};

export const DELETE_NOTIF = (id) => {
	return { type: types.DELETE_NOTIF, payload: id };
};

export const ACCEPT_REQUEST_NOTIF = (id) => {
	return { type: types.ACCEPT_REQUEST_NOTIF, payload: id };
};
