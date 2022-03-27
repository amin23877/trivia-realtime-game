import { actionsTypeUser } from "redux/actions/userActions/actionsType";

const initialState = {
	status: "idle",
	userInfo: {},
	error: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypeUser.FETCH_SUCCESS_USER:
			return { error: null, userInfo: action.payload, status: "success" };

		case actionsTypeUser.FETCH_ERROR_USER:
			return { ...state, error: action.payload, status: "error" };

		case actionsTypeUser.FETCH_LOADING_USER:
			return { ...state, status: "loading" };

		case actionsTypeUser.UPDATE_AVATAR:
			return { ...state, userInfo: { ...state.userInfo, avatar: action.payload } };

		case actionsTypeUser.UPDATE_USERNAME:
			return { ...state, userInfo: { ...state.userInfo, username: action.payload } };

		default:
			return state;
	}
};
