import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileHeaderCard from "./ProfileHeaderCard";

// --- assets
import s from "./ProfileHeader.module.scss";
import { ReactComponent as RedEditIcon } from "assets/images/icons/edit-icon-red.svg";
import { ReactComponent as EditIcon } from "assets/images/icons/edit.svg";

const UserProfileHeader = () => {
	const user = useSelector((state) => state.stateUser.userInfo);

	return (
		<ProfileHeaderCard data={user}>
			<Link className={s.editButtonMobile} to="/profile/edit">
				<EditIcon />
			</Link>

			<Link className={s.editButtonDesktop} to="/profile/edit">
				<RedEditIcon />
				Edit Profile
			</Link>
		</ProfileHeaderCard>
	);
};

export default UserProfileHeader;
