import React from "react";
import Avatar from "common/components/UI/Avatar";
import ChangeProfilePicModal from "common/components/modals/ChangeProfilePicModal";

import "./ChangeAvatar.scss";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "common/values/CORE";
import { updateUser } from "redux/actions/userActions/userActions";

/*
 * 	this component handle user avatar change
 * */
const ChangeAvatar = () => {
	const dispatch = useDispatch();
	const avatar = useSelector((state) => state.stateUser.userInfo.avatar);

	const removeAvatar = () => {
		// 1 - remove avatar from state
		// 2 - request to server for remove avatar
	};

	const changeAvatar = (file) => {
		dispatch(updateUser("avatar", file));
	};

	return (
		<div className="ml-5">
			<ChangeProfilePicModal
				onRemove={removeAvatar}
				onChange={changeAvatar}
				renderButton={(handleOpen) => (
					<Avatar
						onClick={handleOpen}
						src={IMAGE_URL + encodeURI(avatar)}
						size={{ mobile: 72, desktop: 100 }}
						className="change-avatar-btn"
					/>
				)}
			/>
		</div>
	);
};

export default ChangeAvatar;
