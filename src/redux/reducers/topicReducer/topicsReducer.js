import { actionsTypeTopic } from "redux/actions/topicActions/actionsType";

const initialState = {
	topics: [],
	error: null,
};
export const topicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypeTopic.FETCH_SUCCESS:
			return { ...state, topics: action.payload };
		case actionsTypeTopic.FETCH_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};
