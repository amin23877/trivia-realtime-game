import React, { useState } from "react";
// --- components
import ProfileEditHeader from "pages/profile-edit/profileEditComponents/ProfileEditHeader";
import ChangeUsername from "pages/profile-edit/profileEditComponents/ChangeUsername";
import ChangeAvatar from "pages/profile-edit/profileEditComponents/ChangeAvatar";

import "./ProfileEdit.scss";

const validationRegex = new RegExp(/^(?=.{8,20}$)(?!.*[_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);

export const isValidUsername = (username) => validationRegex.test(username);

export const validationDescription =
	"The username should be between 8 and 20 characters long and no underline ( _ ) should be used";

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
