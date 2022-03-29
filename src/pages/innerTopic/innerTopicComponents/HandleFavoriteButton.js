import React, { useEffect, useState } from "react";
import OutlinedButton from "common/components/UI/button/OutlinedButton";
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

	const { fetcher: addToFavorite, status: addStatus } = useRequest(`topic/${id}/add`, config);

	const { fetcher: removeFromFavorite, status: removeStatus } = useRequest(`topic/${id}/remove`, config);

	/*
	 * 	status === 0  means that topic not added to favorites
	 * 	status === 1 means that topic added to favorites
	 * */

	useEffect(() => {
		if (addStatus === "success") setStatus(1);
	}, [addStatus]);

	useEffect(() => {
		if (removeStatus === "success") setStatus(0);
	}, [removeStatus]);

	const getBtnProps = (status) => {
		const isNotAdded = status === 0;
		return {
			ns: isNotAdded ? "add-to-favorites" : "remove-favorites",
			onClick: isNotAdded ? addToFavorite : removeFromFavorite,
			startIcon: isNotAdded ? <AddIcon /> : <RemoveIcon />,
			className: isNotAdded ? s.addToFavorite : s.removeFromFavorite,
			variant: isNotAdded ? "secondary" : "gray",
		};
	};

	return <OutlinedButton {...getBtnProps(status)} />;
};

export default HandleFavoriteButton;
