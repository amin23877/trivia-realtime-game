// Reacts
import React from "react";

// Styles, Icons, Images
import ConfirmModal from "common/components/modals/ConfirmModal";

const ModalConfirmDeactivation = ({ renderButton }) => {
	return (
		<ConfirmModal
			action={() => console.log("you deactivate")}
			actionText="deactivate"
			question="Do you want to deactivate your account?"
			renderButton={renderButton}
		/>
	);
};
export default ModalConfirmDeactivation;
