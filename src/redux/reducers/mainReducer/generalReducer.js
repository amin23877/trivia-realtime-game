import { actionsTypeGeneral } from "redux/actions/mainActions/actionsType";

// #redux step4
const initialState = {
	spinner: false,
	userInfo: {},
	modals: {}, // #modalRedux step3
	snackbar: {},
	categoriesList: null,
	openGameTypes: false,
	openNotifDrawer: false,
	typeLeaderboardComponent: null,
	gameSelectionType: { type: 'quickPlay' }
};
export const generalReducer = (state = initialState, action) => {
	// console.log("payload", action);

	switch (action.type) {
		case actionsTypeGeneral.SET_MODALS: // #modalRedux step4
			return { ...state, modals: action.payload };
		case actionsTypeGeneral.SET_SPINNER:
			return { ...state, spinner: action.payload };
		case actionsTypeGeneral.SET_SNACKBAR:
			return { ...state, snackbar: action.payload };
		case actionsTypeGeneral.SET_USER_INFO:
			return { ...state, userInfo: action.payload };
		case actionsTypeGeneral.GET_CATEGORIES_LIST:
			return { ...state, categoriesList: action.payload };
		case actionsTypeGeneral.SET_OPEN_GAME_TYPES:
			return { ...state, openGameTypes: action.payload };
		case actionsTypeGeneral.SET_GAME_SELECTION_TYPE:
			return { ...state, gameSelectionType: action.payload };
		case actionsTypeGeneral.SET_TYPE_LEADERBOARD_COMPONENT:
			return { ...state, typeLeaderboardComponent: action.payload };
		case actionsTypeGeneral.TOGGLE_NOTIF_DRAWER:
			return { ...state, openNotifDrawer: !state.openNotifDrawer };
		default:
			return state;
	}
};
