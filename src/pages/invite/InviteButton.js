import React, { useState } from "react";
import FilledButton from "common/components/UI/button/FilledButton";
import s from "./Invite.module.scss";

const InviteButton = () => {
	const [openPopover, setOpenPopover] = useState(false);

	const copyInviteLink = () => {
		let link = window.location.origin;
		navigator.clipboard.writeText(link).then(() => {
			setOpenPopover(true);
		});
	};

	const closePopover = () => {
		setOpenPopover(false);
	};

	return (
		<FilledButton
			onClick={copyInviteLink}
			ns="btn.copy-link"
			endIcon={s.linkIcon}
			variant="secondary"
			className={s.button}
			popoverProps={{
				open: openPopover,
				onClose: closePopover,
				ns: "btn.copied-to-cb",
			}}
		/>
	);
};

export default InviteButton;
