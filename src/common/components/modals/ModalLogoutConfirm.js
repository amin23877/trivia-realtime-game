import React from "react";
import ConfirmModal from "common/components/modals/ConfirmModal";
import { useNavigate } from "react-router-dom";

const ModalLogoutConfirm = ({ renderButton }) => {
	const navigate = useNavigate();

	return (
		<ConfirmModal
			action={() => navigate("/login")}
			actionText="menu.logout"
			question="modal.confirm"
			renderButton={renderButton}
		/>
	);
};

export default ModalLogoutConfirm;
