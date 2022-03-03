import React from "react";
import SaveChangeBtn from "pages/profile-edit/profileEditComponents/SaveChangeBtn";

//---assets
import "./ChangeUsername.scss";
import { useSelector } from "react-redux";

/*
 * 	this component render form for allow user change its username
 * */
const ChangeUsername = ({ value, onChange, error, onError }) => {
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
					value={value}
					onChange={onChange}
					placeholder="User name"
					defaultValue={username}
				/>

				<p className={`change-info-form__details ${error ? "change-info-form__details_error" : ""}`}>
					At least 4 characters including uppercase and lowercase letters, numbers, dots, and line.
				</p>

				<SaveChangeBtn onError={onError} newUsername={value} className="d-none d-xl-inline mt-4" />
			</form>
		</div>
	);
};

export default ChangeUsername;
