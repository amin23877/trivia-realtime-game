import React from "react";
import PropTypes from "prop-types";

// ---assets
import "./ProfileEditButton.scss";
import EditIcon from "assets/images/icons/edit.svg";

const ProfileEditButton = ({ onClick }) => {
	return (
		<button className="profile--edit-button" onClick={onClick}>
			<img src={EditIcon} className="profile--edit-button__icon" alt="Edit profile icon" />
		</button>
	);
};

ProfileEditButton.propTypes = {
	onClick: PropTypes.func,
};

export default ProfileEditButton;
