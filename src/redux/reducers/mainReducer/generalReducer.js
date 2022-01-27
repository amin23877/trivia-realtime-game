import { actionsTypeGeneral } from "redux/actions/mainActions/actionsType";

// #redux step4
const initialState = {
	userInfo: {},
	modals: {}, // #modalRedux step3
	categoriesList: null,
};
export const generalReducer = (state = initialState, action) => {
	// console.log("payload", action);

	switch (action.type) {
		case actionsTypeGeneral.SET_USER_INFO:
			return { ...state, userInfo: action.payload };
		case actionsTypeGeneral.SET_MODALS: // #modalRedux step4
			return { ...state, modals: action.payload };
		case actionsTypeGeneral.GET_CATEGORIES_LIST:
			console.log("payload", action);
			return { ...state, categoriesList: action.payload };
		default:
			return state;
	}
};
