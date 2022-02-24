// Reacts
import React from "react";

// Components, Services, Functions
import PropTypes from "prop-types";
import { MODALS } from "common/values/MODALS";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { SET_MODALS } from "redux/actions/mainActions/generalActions";
// Material - lab
import { Modal } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
// Styles, Icons, Images
import "./ModalConfirmDeactivation.scss";
import InfoIcon from "@material-ui/icons/Info";

const GeneralModal = ({ cb, actionText, question, icon }) => {
	const dispatch = useDispatch();
	const stateGeneral = useSelector((state) => state.stateGeneral);

	const handleClose = () => {
		dispatch(SET_MODALS({ [MODALS.generalModal]: false }));
	};

	const handleAction = () => {
		cb();
		handleClose();
	};

	return (
		<Modal open={stateGeneral.modals[MODALS.generalModal]} onClose={handleClose}>
			<div className="w-100 h-100 d-flex justify-content-center align-items-center _modal-center">
				<div className="_modal-body modal-deactivation">
					{icon ? (
						<Avatar style={{ margin: "0 auto" }} src={icon} alt="modal image" />
					) : (
						<InfoIcon className="icon" />
					)}
					<p className="_br-bottom">{question}</p>
					<p className="_br-bottom _cursor-pointer deactivate" onClick={handleAction}>
						{actionText}
					</p>
					<p className="_cursor-pointer" onClick={handleClose}>
						cancel
					</p>
				</div>
			</div>
		</Modal>
	);
};

GeneralModal.propTypes = {
	icon: PropTypes.string,
	question: PropTypes.string.isRequired,
	actionText: PropTypes.string.isRequired,
	cb: PropTypes.func.isRequired,
};

export default GeneralModal;
