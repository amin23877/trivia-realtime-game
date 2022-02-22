import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeaderCard from "./ProfileHeaderCard";
import { useRequest } from "common/hooks/useRequest";

import s from "./ProfileHeader.module.scss";

// images
import { ReactComponent as BackIcon } from "assets/images/icons/arrow-back-friend-profile.svg";

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

				<div className={s.addFriendsButton}>Add Friend</div>
			</ProfileHeaderCard>
		)
	);
};

export default OthersProfileHeader;
