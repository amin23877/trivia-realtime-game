import React from "react";
import SaveChangeBtn from "pages/profile-edit/profileEditComponents/SaveChangeBtn";

//---assets
import "./ChangeUsername.scss";
import { validationDescription } from "pages/profile-edit/ProfileEdit";
import { useSelector } from "react-redux";

/*
 * 	this component render form for allow user change its username
 * */
const ChangeUsername = ({ value, onChange, error, onError }) => {
	const updateFailed = useSelector((state) => state.stateUser.error);
	const username = useSelector((state) => state.stateUser.userInfo.username);

	return (
		<div className="change-info-form-container">
			<form className="change-info-form">
				<label className="change-info-form__label" htmlFor="username">
					User Name
				</label>

				<input
					id="username"
					className="change-info-form__input"
					defaultValue={username}
					onChange={onChange}
					placeholder="User name"
				/>

				<p
					className={`change-info-form__details ${
						error || updateFailed ? "change-info-form__details_error" : ""
					}`}
				>
					{/* show error message if update user is failed otherwise show validation description */}
					{updateFailed ? updateFailed.response.data.error : validationDescription}
				</p>

				<SaveChangeBtn onError={onError} newUsername={value} className="d-none d-xl-inline mt-4" />
			</form>
		</div>
	);
};

export default ChangeUsername;
