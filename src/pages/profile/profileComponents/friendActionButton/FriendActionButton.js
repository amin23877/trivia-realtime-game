import { useEffect, useState } from "react";
import { useRequest } from "common/hooks/useRequest";

import s from "./FriendActionButton.module.scss";
import OutlinedButton from "common/components/UI/button/OutlinedButton";
import FilledButton from "common/components/UI/button/FilledButton";

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
			<OutlinedButton variant="gray" onClick={handleRemoveFriend} className={s.friendActionButton}>
				Remove
			</OutlinedButton>
		);

	if (buttonStatus === "requested")
		return (
			<OutlinedButton variant="secondary" onClick={handleRemoveRequest} className={s.friendActionButton}>
				Requested
			</OutlinedButton>
		);

	if (buttonStatus === "add")
		return (
			<FilledButton variant="secondary" onClick={handleMakeRequest} className={s.friendActionButton}>
				Add Friend
			</FilledButton>
		);

	return null;
};

export default FriendActionButton;
