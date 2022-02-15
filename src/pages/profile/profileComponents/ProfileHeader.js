import React from "react";
import PropTypes from "prop-types";
import Avatar from "common/components/UI/Avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// --- assets
import "./ProfileHeader.scss";
import profileCover from "assets/images/test/profile-header.jpg";
import { ReactComponent as EditIcon } from "assets/images/icons/edit.svg";
import { ReactComponent as RedEditIcon } from "assets/images/icons/edit-icon-red.svg";
import { IMAGE_URL } from "common/values/CORE";

const ProfileHeader = () => {
	const user = useSelector((state) => state.stateUser.userInfo);

	return (
		<header className="profile-header">
			<img src={profileCover} alt="cover" className="profile-header__image" />

			<div className="profile-header__info">
				<Avatar
					size={{ mobile: 54, desktop: 100 }}
					src={IMAGE_URL + encodeURI(user.avatar)}
					className="profile-header__pic"
				/>

				<div className="d-flex justify-content-between align-items-center flex-grow-1">
					<div className="d-flex flex-column ">
						<div className="profile-header__name">{user.username}</div>
						<div className="profile-header__level">Level {user.level}</div>
					</div>

					<Link className="profile-header__edit profile-header__edit_mobile" to="/profile/edit">
						<EditIcon />
					</Link>

					<Link className="profile-header__edit profile-header__edit_desktop" to="/profile/edit">
						<RedEditIcon />
						Edit Profile
					</Link>
				</div>
			</div>
		</header>
	);
};

ProfileHeader.propTypes = {
	tabHandler: PropTypes.func,
	activeTab: PropTypes.string,
};

export default ProfileHeader;
