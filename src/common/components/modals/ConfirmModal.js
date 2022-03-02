import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import Avatar from "common/components/UI/Avatar";

import s from "common/components/modals/ConfirmModal.module.scss";
import { IMAGE_URL } from "common/values/CORE";

const ConfirmModal = ({ alertIcon = true, avatar, question, actionText, action, renderButton }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const handleAction = () => {
		action();
		handleClose(); // close modal when action executed
	};

	return (
		<>
			{renderButton(handleOpen)}

			<Modal
				BackdropProps={{ className: "_modal-backdrop" }}
				disableAutoFocus
				disableEnforceFocus
				className="_modal-content-center"
				open={open}
				onClose={handleClose}
			>
				<div className="_modal-content-box">
					<div className={s.questionSection}>
						{alertIcon && <div className={s.alertIcon} />}

						{avatar && <Avatar src={IMAGE_URL + encodeURI(avatar)} size={{ mobile: 50, desktop: 66 }} />}

						<p>{question}</p>
					</div>

					<div className={s.actionSection}>
						<p className={s.actionRed} onClick={handleAction}>
							{actionText}
						</p>

						<p className={s.action} onClick={handleClose}>
							Cancel
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ConfirmModal;
