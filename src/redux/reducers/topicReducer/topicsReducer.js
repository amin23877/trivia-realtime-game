import { actionsTypeTopic } from "redux/actions/topicActions/actionsType";

const initialState = {
	topics: null,
	topicsByTop: null,
	topicsByLatest: null,
	topicsByFavorite: null,
	error: null,
};
export const topicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypeTopic.FETCH_SUCCESS_TOPICS:
			return { ...state, topics: action.payload };
		case actionsTypeTopic.FETCH_ERROR_TOPICS:
			return { ...state, error: action.payload };

		case actionsTypeTopic.FETCH_SUCCESS_TOPICS_SORT_TOP:
			return { ...state, topicsByTop: action.payload };
		case actionsTypeTopic.FETCH_SUCCESS_TOPICS_SORT_LATEST:
			return { ...state, topicsByLatest: action.payload };
		case actionsTypeTopic.FETCH_SUCCESS_TOPICS_SORT_FAVORITE:
			return { ...state, topicsByFavorite: action.payload };

		default:
			return state;
	}
};
