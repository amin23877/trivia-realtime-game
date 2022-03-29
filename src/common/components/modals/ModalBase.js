import React, { useState } from "react";
import { Modal } from "@material-ui/core";

const ModalBase = ({ children, renderButton, closeAfterAction }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const handleAction = (action) => {
		action();

		if (closeAfterAction) handleClose();
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
				{children({ handleClose, handleAction })}
			</Modal>
		</>
	);
};

export default ModalBase;
