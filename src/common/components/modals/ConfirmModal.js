import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import s from "common/components/modals/ConfirmModal.module.scss";

const ConfirmModal = ({ icon, question, actionText, action, renderButton }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

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
						{icon ? <Avatar src={icon} alt="modal image" /> : <div className={s.alertIcon} />}

						<p>{question}</p>
					</div>

					<div className={s.actionSection}>
						<p className={s.actionRed} onClick={action}>
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
