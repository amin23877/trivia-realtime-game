import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/actions/userActions/userActions";
import { useNavigate } from "react-router-dom";

import "pages/profile-edit/profileEditComponents/SaveChangesBtn.scss";
import { isValidUsername } from "pages/profile-edit/ProfileEdit";

/*
 *  this component get new username and save it
 *  */
const SaveChangeBtn = ({ className, onError, newUsername, ...rest }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChangeUsername = () => {
		if (!isValidUsername(newUsername)) {
			onError();
			return;
		}

		dispatch(
			updateUser("username", newUsername, () => {
				// navigate to user profile when update is successful
				navigate("/profile");
			})
		);
	};

	return (
		<span {...rest} onClick={handleChangeUsername} className={`save-changes-btn ${className}`}>
			Save Changes
		</span>
	);
};

export default SaveChangeBtn;
