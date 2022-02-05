import React, { useState } from "react";
// --- components
import ProfileEditHeader from "pages/profile-edit/profileEditComponents/ProfileEditHeader";
import ChangeUsername from "pages/profile-edit/profileEditComponents/ChangeUsername";
import ChangeAvatar from "pages/profile-edit/profileEditComponents/ChangeAvatar";
import ChangeCover from "pages/profile-edit/profileEditComponents/ChangeCover";

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
		<div className="h-100 d-flex flex-column">
			<ProfileEditHeader newUsername={newUsername} />

			<ChangeCover />

			<ChangeAvatar />

			<ChangeUsername value={newUsername} onChange={handleUsernameChanges} />
		</div>
	);
};
export default EditProfile;
