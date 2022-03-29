import { notifActionTypes as types } from "redux/actions/notifActions/actionsType";
import { FETCH_STATUS } from "redux/actions/notifActions/notifActions";
import ApiCall from "common/services/ApiCall";

const initialState = {
	status: "idle",
	notifications: [],
	hasNewNotif: false,
};

export const notifReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_SUCCESS:
			return { ...state, status: "success", notifications: action.payload };
		case types.FETCH_ERROR:
			return { ...state, status: "error" };
		case types.FETCH_LOADING:
			return { ...state, status: "loading" };
		case types.ACCEPT_REQUEST_NOTIF:
			return {
				...state,
				notifications: state.notifications.map((notif) => {
					if (notif._id === action.payload) {
						return { ...notif, accepted: true, loading: false };
					}
					return notif;
				}),
			};
		case types.DELETE_NOTIF:
			return { ...state, notifications: state.notifications.filter((notif) => notif._id !== action.payload) };
		default:
			return state;
	}
};

const apiCall = new ApiCall();

export const fetchNotif = () => {
	return (dispatch) => {
		dispatch(FETCH_STATUS("loading"));
		apiCall
			.get("user/me/requests")
			.then((response) => {
				dispatch(
					FETCH_STATUS(
						"success",
						response.data.map((item) => ({ ...item, accepted: false }))
					)
				);
			})
			.catch(() => {
				dispatch(FETCH_STATUS("error"));
			});
	};
};
