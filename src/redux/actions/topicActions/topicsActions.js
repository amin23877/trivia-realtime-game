import { actionsTypeTopic } from "./actionsType";

import ApiCall from "common/services/ApiCall";
// import { MODALS } from "common/values/MODALS";
// import { handleCatchErrorApiCall } from "functions/handleCatchErrorApiCall";

const apiCall = new ApiCall();

export const TOPICS_FETCH_ERROR = (error) => {
	return { type: actionsTypeTopic.FETCH_ERROR, payload: error };
};
export const TOPICS_FETCH_SUCCESS = (response) => {
	return { type: actionsTypeTopic.FETCH_SUCCESS, payload: response };
};

export const fetchTopics = () => {
	return (dispatch) => {
		// dispatch(SET_SPINNER(true));
		apiCall
			.get("home")
			.then((response) => {
				// console.log(response);
				// dispatch(SET_SPINNER(false));
				let topics = [
					{
						topic: "Top Topics",
						path: "",
						topicList: response.top,
					},
					{
						topic: "Lastest Topics",
						path: "",
						topicList: response.latest,
					},
					{
						topic: "Favorite TopicsTop Topics",
						path: "",
						topicList: response.followed,
					},
				];
				dispatch(TOPICS_FETCH_SUCCESS(topics));
			})
			.catch((error) => {
				dispatch(TOPICS_FETCH_ERROR(error));
				// dispatch(SET_SPINNER(false));
				// let err = handleCatchErrorApiCall(error);
				// dispatch(SET_INFO_MODAL_GENREAL(err));
				// dispatch(SET_MODALS({ [MODALS.dialogMsg]: true }));
			});
	};
};
