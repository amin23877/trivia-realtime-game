import React from "react";
import { useNavigate } from "react-router-dom";
//----assets
import "pages/profile-edit/profileEditComponents/ProfileEditHeader.scss";
import ArrowLeft from "assets/images/icons/arrow-left.svg";
//----component
import SaveChangeBtn from "pages/profile-edit/profileEditComponents/SaveChangeBtn";

const ProfileEditHeader = ({ newUsername, onError }) => {
	const navigate = useNavigate();

	return (
		<header className="edit-header">
			<div className="edit-header__left-side">
				<span onClick={() => navigate(-1)} className="edit-header__back">
					<img src={ArrowLeft} alt="go back" />
				</span>

				<p>Edit Profile</p>
			</div>

			<SaveChangeBtn onError={onError} newUsername={newUsername} />
		</header>
	);
};

export default ProfileEditHeader;
