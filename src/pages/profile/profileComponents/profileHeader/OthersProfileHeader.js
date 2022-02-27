import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeaderCard from "./ProfileHeaderCard";
import { useRequest } from "common/hooks/useRequest";

import s from "./ProfileHeader.module.scss";

// images
import { ReactComponent as BackIcon } from "assets/images/icons/arrow-back-friend-profile.svg";

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

const OthersProfileHeader = ({ id }) => {
	const navigate = useNavigate();

	const { response, success } = useRequest(`user/${id}`);

	// redirect user to home if there is no user with this id
	if (success && !response) {
		navigate("/");
	}

	return (
		success && (
			<ProfileHeaderCard data={response}>
				<div onClick={() => navigate(-1)} className={s.backButton}>
					<BackIcon />
				</div>

				{/*<FriendActionButton isFriend={response.friend} id={id} />*/}
			</ProfileHeaderCard>
		)
	);
};

export default OthersProfileHeader;
