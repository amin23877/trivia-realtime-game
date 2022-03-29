import React, { useEffect, useState } from "react";
import ModalBase from "common/components/modals/ModalBase";
import OutlinedButton from "common/components/UI/button/OutlinedButton";
import Text from "common/components/UI/text/Text";

import s from "./ShareModal.module.scss";
import telegramIcon from "assets/images/icons/telegram-icon.jpg";
import whatsapp from "assets/images/icons/whatsapp-icon.jpg";
import twitterIcon from "assets/images/icons/twitter-icon.jpg";

const ShareModal = ({ renderButton, title }) => {
	const [copyLinkButtonText, setCopyLinkButtonText] = useState("btn.copy-link");

	const copyUrlToClipboard = () => {
		const url = window.location.href;

		navigator.clipboard.writeText(url).then(() => {
			setCopyLinkButtonText("btn.copied-to-cb");
		});
	};

	/* convert button text to initial value after delay */
	useEffect(() => {
		let timeout = setTimeout(() => setCopyLinkButtonText("btn.copy-link"), 2000);

		return () => clearTimeout(timeout);
	}, [copyLinkButtonText]);

	return (
		<ModalBase renderButton={renderButton}>
			{({ handleClose, handleAction }) => (
				<div className={`_modal-content-box ${s.container}`}>
					<div className={s.header}>
						<Text ns="modal.share" params={{ type: title }} />

						<div onClick={handleClose} className={s.closeIcon} />
					</div>

					<hr className="m-0" />

					<div className={s.actions}>
						<OutlinedButton
							ns={copyLinkButtonText}
							onClick={() => handleAction(copyUrlToClipboard)}
							variant="gray"
							className="text-center"
						/>

						<div className="py-3 d-flex justify-content-between">
							<div className={s.iconBox}>
								<img src={telegramIcon} alt="telegram" />
								<Text ns="telegram" />
							</div>

							<div className={s.iconBox}>
								<img src={whatsapp} alt="telegram" />
								<Text ns="whatsapp" />
							</div>

							<div className={s.iconBox}>
								<img src={twitterIcon} alt="telegram" />
								<Text ns="twitter" />
							</div>
						</div>
					</div>
				</div>
			)}
		</ModalBase>
	);
};

export default ShareModal;
