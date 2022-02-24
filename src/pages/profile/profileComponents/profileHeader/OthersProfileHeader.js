import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeaderCard from "./ProfileHeaderCard";
import { useRequest } from "common/hooks/useRequest";

import s from "./ProfileHeader.module.scss";

// images
import { ReactComponent as BackIcon } from "assets/images/icons/arrow-back-friend-profile.svg";

// this component handle variants of friend status
const FriendActionButton = ({ isFriend, id }) => {
	const { fetcher: addRequest, success: addSuccess } = useRequest(`user/${id}/add`, { method: "post" });

	const { fetcher: removeFriend, success: removeSuccess } = useRequest(`user/${id}/remove`, { method: "post" });

	const sendAddRequest = () => {
		addRequest();
	};

	const handleRemoveFriend = () => {
		removeFriend();
	};

	if (isFriend && !removeSuccess)
		return (
			<div onClick={handleRemoveFriend} className={s.removeFriendButton}>
				Remove
			</div>
		);

	if (!isFriend && !addSuccess)
		return (
			<div onClick={sendAddRequest} className={s.addFriendsButton}>
				Add Friend
			</div>
		);

	return <div className={s.requestedFriendsButton}>Requested</div>;
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

				<FriendActionButton isFriend={response.friend} id={id} />
			</ProfileHeaderCard>
		)
	);
};

export default OthersProfileHeader;
