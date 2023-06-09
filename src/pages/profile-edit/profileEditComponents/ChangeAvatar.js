import React, { useRef } from "react";
import Avatar from "common/components/UI/Avatar";
import ConfirmModal from "common/components/modals/ConfirmModal";

import "./ChangeAvatar.scss";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "common/values/CORE";
import { deleteAvatar, updateUser } from "redux/actions/userActions/userActions";
import { ReactComponent as EditIcon } from "assets/images/icons/edit.svg";
import { ReactComponent as TrashIcon } from "assets/images/icons/delete-icon.svg";

/*
 * 	this component handle user avatar change
 * */
const ChangeAvatar = () => {
	const fileInputRef = useRef();

	const dispatch = useDispatch();
	const avatar = useSelector((state) => state.stateUser.userInfo.avatar);

	const selectFileHandler = () => fileInputRef?.current?.click();

	const handleRemoveAvatar = () => {
		dispatch(deleteAvatar());
	};

	const handleChangeAvatar = (e) => {
		const file = e.currentTarget.files[0];

		if (file) dispatch(updateUser("avatar", file));
	};

	return (
		<div className="change-avatar-container">
			<input ref={fileInputRef} type="file" onChange={handleChangeAvatar} hidden />

			<Avatar src={IMAGE_URL + encodeURI(avatar)} size={{ mobile: 72, desktop: 156 }} />

			<span onClick={selectFileHandler} className="change-avatar-btn">
				<EditIcon />
			</span>

			<ConfirmModal
				alertIcon={false}
				question="modal.removeAvatar"
				actionText="remove"
				action={handleRemoveAvatar}
				renderButton={(handleOpen) => (
					<span onClick={handleOpen} className="change-avatar-btn">
						<TrashIcon />
					</span>
				)}
			/>
		</div>
	);
};

export default ChangeAvatar;
