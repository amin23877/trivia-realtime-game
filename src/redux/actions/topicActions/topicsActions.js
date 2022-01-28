import { actionsTypeTopic } from "./actionsType";

import ApiCall from "common/services/ApiCall";
import { TOPIC_TYPE } from "common/values/CORE";
import { handleCatchErrorFunc } from "common/functions/handleCatchErrorFunc";
import { SET_SPINNER } from "../mainActions/generalActions";
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
		dispatch(SET_SPINNER(true));
		apiCall
			.get("home")
			.then((response) => {
				// console.log(response);
				dispatch(SET_SPINNER(false));
				let topics = [
					{
						topic: "Top Topics",
						type: TOPIC_TYPE.TOP,
						path: "",
						topicList: response.data.top,
					},
					{
						topic: "Lastest Topics",
						type: TOPIC_TYPE.LATEST,
						path: "",
						topicList: response.data.latest,
					},
					{
						topic: "Favorite Topics",
						type: TOPIC_TYPE.FAVORITE,
						path: "",
						topicList: response.data.followed,
					},
				];
				dispatch(TOPICS_FETCH_SUCCESS(topics));
			})
			.catch((error) => {
				dispatch(SET_SPINNER(false));
				handleCatchErrorFunc(error);
				dispatch(TOPICS_FETCH_ERROR(error));
				// let err = handleCatchErrorApiCall(error);
				// dispatch(SET_INFO_MODAL_GENREAL(err));
				// dispatch(SET_MODALS({ [MODALS.dialogMsg]: true }));
			});
	};
};
