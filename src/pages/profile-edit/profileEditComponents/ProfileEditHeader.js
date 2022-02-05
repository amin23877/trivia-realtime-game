import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
//----assets
import "pages/profile-edit/profileEditComponents/ProfileEditHeader.scss";
import ArrowLeft from "assets/images/icons/arrow-left.svg";
//----component
import SaveChangeBtn from "pages/profile-edit/profileEditComponents/SaveChangeBtn";

const ProfileEditHeader = ({ newUsername }) => {
	const navigate = useNavigate();

	return (
		<header className="edit-header">
			<div className="edit-header__left-side">
				<span onClick={() => navigate("/profile/favorite-topics")} className="edit-header__back">
					<img src={ArrowLeft} alt="go back" />
				</span>

				<p>Edit Profile</p>
			</div>

			<SaveChangeBtn newUsername={newUsername} />
		</header>
	);
};

ProfileEditHeader.propTypes = {
	data: PropTypes.object,
	photoCallBack: PropTypes.func,
	onSaveChanges: PropTypes.func,
	onDelete: PropTypes.func,
};

export default ProfileEditHeader;
