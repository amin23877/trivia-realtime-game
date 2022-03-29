import { friendStatusTypes as types } from "redux/actions/friendStatusActions/actionsType";

/*
 * There are four status ==> 0 (is not friend) , 1 (is friend) , 2 (is requested), 3 (request for you)
 * */
export const friendStatusReducer = (state = null, action) => {
	switch (action.type) {
		case types.INIT_STATUS:
			return action.payload;
		case types.IS_FRIEND:
			return 1;
		case types.IS_NOT_FRIEND:
			return 0;
		case types.IS_REQUESTED:
			return 2;
		case types.IS_REQUEST_FOR_YOU:
			return 3;
		default:
			return state;
	}
};
