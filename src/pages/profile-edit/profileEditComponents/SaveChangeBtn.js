import React from "react";

import "pages/profile-edit/profileEditComponents/SaveChangesBtn.scss";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/actions/userActions/userActions";

/*
 *  this component get new username and save it
 *  */
const SaveChangeBtn = ({ className, newUsername, ...rest }) => {
	const dispatch = useDispatch();

	const handleChangeUsername = () => {
		console.log(newUsername);
		dispatch(updateUser("username", newUsername));
	};

	return (
		<span {...rest} onClick={handleChangeUsername} className={`save-changes-btn ${className}`}>
			Save Changes
		</span>
	);
};

export default SaveChangeBtn;
