import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/actions/userActions/userActions";
import { useNavigate } from "react-router-dom";

import "pages/profile-edit/profileEditComponents/SaveChangesBtn.scss";

/*
 *  this component get new username and save it
 *  */
const SaveChangeBtn = ({ className, newUsername, ...rest }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChangeUsername = () => {
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
