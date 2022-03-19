import { friendStatusTypes as types } from "redux/actions/friendStatusActions/actionsType";

export const SET_STATUS = (type) => {
	return { type };
};

export const INIT_STATUS = (status) => {
	return { type: types.INIT_STATUS, payload: status };
};
