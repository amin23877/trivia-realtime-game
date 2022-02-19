import React, { useEffect, useState } from "react";
import s from "pages/innerTopic/InnerTopic.module.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useRequest } from "common/hooks/useRequest";

// useRequest hook config object
const config = {
	method: "post",
};

/*
 * 	This component manage add and remove topic from favorites
 * */
const HandleFavoriteButton = ({ initialStatus, id }) => {
	const [status, setStatus] = useState(initialStatus);

	const { fetcher: addToFavorite, success: addSuccess } = useRequest(`topic/${id}/add`, config);

	const { fetcher: removeFromFavorite, success: removeSuccess } = useRequest(`topic/${id}/remove`, config);

	/*
	 * 	status === 0  means that topic not added to favorites
	 * 	status === 1 means that topic added to favorites
	 * */

	useEffect(() => {
		if (addSuccess) setStatus(1);
	}, [addSuccess]);

	useEffect(() => {
		if (removeSuccess) setStatus(0);
	}, [removeSuccess]);

	return status === 1 ? (
		<p className={s.removeFromFavorite} onClick={removeFromFavorite}>
			<RemoveIcon /> Remove from Favorites
		</p>
	) : (
		<p className={s.addToFavorite} onClick={addToFavorite}>
			<AddIcon /> Add to favorites
		</p>
	);
};

export default HandleFavoriteButton;
