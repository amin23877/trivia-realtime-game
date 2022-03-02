import React, { useRef, useState } from "react";
import { Modal } from "@material-ui/core";

//---assets
import s from "common/components/modals/ChangeProfilePicModal.module.scss";

const ChangeProfilePicModal = ({ onRemove, onChange, renderButton }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fileInputRef = useRef();

	const changeInputHandler = (e) => {
		const file = e.currentTarget.files[0];

		if (file) onChange(file);

		handleClose();
	};

	const selectFileHandler = () => {
		fileInputRef?.current?.click();
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
					<div className="">
						<input ref={fileInputRef} type="file" onChange={changeInputHandler} hidden />

						<p className={s.remove} onClick={onRemove}>
							Remove profile photo
						</p>

						<p className={s.btn} onClick={selectFileHandler}>
							New profile photo
						</p>

						<p className={s.cancel} onClick={handleClose}>
							Cancel
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ChangeProfilePicModal;
