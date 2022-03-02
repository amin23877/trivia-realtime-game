import React, { useState } from "react";
// --- components
import ProfileEditHeader from "pages/profile-edit/profileEditComponents/ProfileEditHeader";
import ChangeUsername from "pages/profile-edit/profileEditComponents/ChangeUsername";
import ChangeAvatar from "pages/profile-edit/profileEditComponents/ChangeAvatar";

import "./ProfileEdit.scss";

/*
 * 	cover and avatar are changed when user upload new image
 * 	but username need to "save changes" button clicked
 * 	because location of "save changes" button is different on mobile and desktop
 * 	I "lift" input state (newUsername) to this component
 * 	for pass new username to SaveChangesBtn component inside ProfileEditHeader
 * */
const EditProfile = () => {
	const [newUsername, setNewUsername] = useState();

	const handleUsernameChanges = ({ target: { value } }) => {
		setNewUsername(value);
	};

	return (
		<div className="profile-edit-root">
			<div className="_profile-background">
				<ProfileEditHeader newUsername={newUsername} />

				<ChangeAvatar />
			</div>

			<ChangeUsername value={newUsername} onChange={handleUsernameChanges} />
		</div>
	);
};
export default EditProfile;
