import { actionsTypeUser } from "redux/actions/userActions/actionsType";

const initialState = {
	userInfo: {},
	error: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypeUser.FETCH_SUCCESS_USER:
			return { error: null, userInfo: action.payload };
		case actionsTypeUser.FETCH_ERROR_USER:
			return { ...state, error: action.payload };
		case actionsTypeUser.UPDATE_AVATAR:
			return { ...state, userInfo: { ...state.userInfo, avatar: action.payload } };
		case actionsTypeUser.UPDATE_USERNAME:
			return { ...state, userInfo: { ...state.userInfo, username: action.payload } };
		default:
			return state;
	}
};
