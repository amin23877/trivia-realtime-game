import React, { useState } from "react";
// --- components
import ProfileEditHeader from "pages/profile-edit/profileEditComponents/ProfileEditHeader";
import ChangeUsername from "pages/profile-edit/profileEditComponents/ChangeUsername";
import ChangeAvatar from "pages/profile-edit/profileEditComponents/ChangeAvatar";

import "./ProfileEdit.scss";

export const USERNAME_MIN_LENGTH = 3;

export const isValidUsername = (username) => username.length >= USERNAME_MIN_LENGTH;

const EditProfile = () => {
	const [error, setError] = useState(false);
	const [newUsername, setNewUsername] = useState();

	const handleError = () => setError(true);

	const handleUsernameChanges = ({ target: { value } }) => {
		if (isValidUsername(value)) setError(false);

		setNewUsername(value);
	};

	return (
		<div className="profile-edit-root">
			<div className="_profile-background">
				<ProfileEditHeader onError={handleError} newUsername={newUsername} />

				<ChangeAvatar />
			</div>

			<ChangeUsername value={newUsername} onChange={handleUsernameChanges} onError={handleError} error={error} />
		</div>
	);
};
export default EditProfile;
