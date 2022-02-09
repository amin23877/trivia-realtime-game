import { actionsTypeUser } from "./actionsType";

import ApiCall from "common/services/ApiCall";
import { handleCatchErrorFunc } from "common/functions/handleCatchErrorFunc";
import { SET_SPINNER } from "../mainActions/generalActions";

const apiCall = new ApiCall();

export const FETCH_ERROR_USER = (error) => {
	return { type: actionsTypeUser.FETCH_ERROR_USER, payload: error };
};
export const FETCH_SUCCESS_USER = (response) => {
	return { type: actionsTypeUser.FETCH_SUCCESS_USER, payload: response };
};
export const UPDATE_AVATAR = (response) => {
	return { type: actionsTypeUser.UPDATE_AVATAR, payload: response };
};
export const UPDATE_USERNAME = (response) => {
	return { type: actionsTypeUser.UPDATE_USERNAME, payload: response };
};

export const fetchUser = () => {
	return (dispatch) => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get("/user/me")
			.then((response) => {
				dispatch(SET_SPINNER(false));
				dispatch(FETCH_SUCCESS_USER(response.data));
			})
			.catch((error) => {
				dispatch(SET_SPINNER(false));
				handleCatchErrorFunc(error);
				dispatch(FETCH_ERROR_USER(error));
			});
	};
};

export const updateUser = (field, data) => {
	return (dispatch) => {
		let action;
		let body = new FormData();

		switch (field) {
			case "avatar":
				action = UPDATE_AVATAR;
				body.append("avatar", data);
				break;
			case "username":
				action = UPDATE_USERNAME;
				body.append("username", data);
				break;
			default:
				throw new Error("unhandled update user type");
		}

		let apiCall = new ApiCall();

		dispatch(SET_SPINNER(true));
		apiCall
			.patch("/user/me", body)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				console.log(res.data);
				dispatch(action(res.data[field]));
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));

				handleCatchErrorFunc(err);

				dispatch(FETCH_ERROR_USER(err));
			});
	};
};