import { useEffect, useState } from "react";
import { useRequest } from "common/hooks/useRequest";

import s from "./FriendActionButton.module.scss";

// this component handle variants of friend status
const FriendActionButton = ({ isFriend, id }) => {
	const [buttonStatus, setButtonStatus] = useState();

	const { fetcher: makeRequest, status: makeRequestStatus } = useRequest(`user/${id}/request`, { method: "post" });

	const { fetcher: removeRequest, status: removeRequestStatus } = useRequest(`user/${id}/request`, {
		method: "DELETE",
	});

	const { fetcher: removeFriend, status: removeFriendStatus } = useRequest(`user/${id}/friend`, {
		method: "DELETE",
	});

	const handleMakeRequest = () => {
		makeRequest();
	};

	const handleRemoveRequest = () => {
		removeRequest();
	};

	const handleRemoveFriend = () => {
		removeFriend();
	};

	useEffect(() => {
		if (isFriend) {
			setButtonStatus("remove");
		} else {
			setButtonStatus("add");
		}

		if (removeFriendStatus === "success") return setButtonStatus("add");
		if (removeRequestStatus === "success") return setButtonStatus("add");
		if (makeRequestStatus === "success") return setButtonStatus("requested");
	}, [isFriend, makeRequestStatus, removeFriendStatus, removeRequestStatus]);

	if (buttonStatus === "remove")
		return (
			<div onClick={handleRemoveFriend} className={s.removeFriendButton}>
				Remove
			</div>
		);

	if (buttonStatus === "requested")
		return (
			<div onClick={handleRemoveRequest} className={s.requestedFriendsButton}>
				Requested
			</div>
		);

	if (buttonStatus === "add")
		return (
			<div onClick={handleMakeRequest} className={s.addFriendsButton}>
				Add Friend
			</div>
		);

	return null;
};

export default FriendActionButton;
