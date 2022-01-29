import { actionsTypeTopic } from "./actionsType";

import ApiCall from "common/services/ApiCall";
import { TYPE_TOPIC } from "common/values/TYPES";
import { handleCatchErrorFunc } from "common/functions/handleCatchErrorFunc";
import { SET_SPINNER } from "../mainActions/generalActions";
import { TYPE_TOPIC_SORTKEY } from "common/values/TYPES";
// import { MODALS } from "common/values/MODALS";
// import { handleCatchErrorApiCall } from "functions/handleCatchErrorApiCall";

const apiCall = new ApiCall();

export const FETCH_ERROR_TOPICS = (error) => {
	return { type: actionsTypeTopic.FETCH_ERROR_TOPICS, payload: error };
};
export const FETCH_SUCCESS_TOPICS = (response) => {
	return { type: actionsTypeTopic.FETCH_SUCCESS_TOPICS, payload: response };
};

export const FETCH_SUCCESS_TOPICS_SORT_TOP = (response) => {
	return { type: actionsTypeTopic.FETCH_SUCCESS_TOPICS_SORT_TOP, payload: response };
};
export const FETCH_SUCCESS_TOPICS_SORT_LATEST = (response) => {
	return { type: actionsTypeTopic.FETCH_SUCCESS_TOPICS_SORT_LATEST, payload: response };
};
export const FETCH_SUCCESS_TOPICS_SORT_FAVORITE = (response) => {
	return { type: actionsTypeTopic.FETCH_SUCCESS_TOPICS_SORT_FAVORITE, payload: response };
};

export const fetchTopics = () => {
	return (dispatch) => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get("home")
			.then((response) => {
				// console.log(response);
				dispatch(SET_SPINNER(false));
				let topics = [
					{
						topic: "Top Topics",
						type: TYPE_TOPIC.TOP,
						path: "",
						topicList: response.data.top,
					},
					{
						topic: "Lastest Topics",
						type: TYPE_TOPIC.LATEST,
						path: "",
						topicList: response.data.latest,
					},
					{
						topic: "Favorite Topics",
						type: TYPE_TOPIC.FAVORITE,
						path: "",
						topicList: response.data.followed,
					},
				];
				dispatch(FETCH_SUCCESS_TOPICS(topics));
			})
			.catch((error) => {
				dispatch(SET_SPINNER(false));
				handleCatchErrorFunc(error);
				dispatch(FETCH_ERROR_TOPICS(error));
				// let err = handleCatchErrorApiCall(error);
				// dispatch(SET_INFO_MODAL_GENREAL(err));
				// dispatch(SET_MODALS({ [MODALS.dialogMsg]: true }));
			});
	};
};

export const fetchTopicsSort = (sortKey, orderKey = "DESC") => {
	return (dispatch) => {
		dispatch(SET_SPINNER(true));
		apiCall
			.get(`topic?sort=${sortKey}&order=${orderKey}`)
			.then((response) => {
				console.log(response);
				dispatch(SET_SPINNER(false));

				switch (sortKey) {
					case TYPE_TOPIC_SORTKEY.TOP:
						dispatch(FETCH_SUCCESS_TOPICS_SORT_TOP());
						break;

					case TYPE_TOPIC_SORTKEY.LATEST:
						dispatch(FETCH_SUCCESS_TOPICS_SORT_LATEST());
						break;

					case TYPE_TOPIC_SORTKEY.FAVORITE:
						dispatch(FETCH_SUCCESS_TOPICS_SORT_FAVORITE());
						break;

					default:
						break;
				}
			})
			.catch((error) => {
				dispatch(SET_SPINNER(false));
				handleCatchErrorFunc(error);
				dispatch(FETCH_ERROR_TOPICS(error));
			});
	};
};
