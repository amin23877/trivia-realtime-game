import React from "react";
import { useNavigate } from "react-router-dom";
//----assets
import "pages/profile-edit/profileEditComponents/ProfileEditHeader.scss";
import ArrowLeft from "assets/images/icons/arrow-left.svg";
//----component
import SaveChangeBtn from "pages/profile-edit/profileEditComponents/SaveChangeBtn";
import Text from "common/components/UI/text/Text";

const ProfileEditHeader = ({ newUsername, onError }) => {
	const navigate = useNavigate();

	return (
		<header className="edit-header">
			<div className="edit-header__left-side">
				<span onClick={() => navigate(-1)} className="edit-header__back">
					<img src={ArrowLeft} alt="go back" />
				</span>

				<Text ns="btn.edit-profile" />
			</div>

			<SaveChangeBtn onError={onError} newUsername={newUsername} />
		</header>
	);
};

export default ProfileEditHeader;
