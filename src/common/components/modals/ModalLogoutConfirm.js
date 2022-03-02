import React from "react";
import ConfirmModal from "common/components/modals/ConfirmModal";
import { useNavigate } from "react-router-dom";

const ModalLogoutConfirm = ({ renderButton }) => {
	const navigate = useNavigate();

	return (
		<ConfirmModal
			action={() => navigate("/login")}
			actionText="Logout"
			question="Do you want to Log out of your account?"
			renderButton={renderButton}
		/>
	);
};

export default ModalLogoutConfirm;
