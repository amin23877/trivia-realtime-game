import React from "react";
import Avatar from "common/components/UI/Avatar";
import ModalBase from "common/components/modals/ModalBase";
import Text from "common/components/UI/text/Text";

import s from "common/components/modals/ConfirmModal.module.scss";
import { IMAGE_URL } from "common/values/CORE";

const ConfirmModal = ({ alertIcon = true, avatar, question, actionText, renderButton, action }) => {
	return (
		<ModalBase renderButton={renderButton} closeAfterAction>
			{(handlers) => (
				<div className="_modal-content-box">
					<div className={s.questionSection}>
						{alertIcon && <div className={s.alertIcon} />}

						{avatar && <Avatar src={IMAGE_URL + encodeURI(avatar)} size={{ mobile: 50, desktop: 66 }} />}

						<Text ns={question} />
					</div>

					<div className={s.actionSection}>
						<Text ns={actionText} className={s.actionRed} onClick={() => handlers.handleAction(action)} />

						<Text ns="cancel" className={s.action} onClick={handlers.handleClose} />
					</div>
				</div>
			)}
		</ModalBase>
	);
};

export default ConfirmModal;
