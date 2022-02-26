// Reacts
import React from "react";

// Hooks
// Redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import Avatar from "common/components/UI/Avatar";
import { MODALS } from "common/values/MODALS";
import { SET_MODALS } from "redux/actions/mainActions/generalActions";

// Styles, Icons, Images
import s from "./Menu.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/icons/close-drawer-icon.svg";
import GeneralModal from "pages/modals/GeneralModal";

const Menu = ({ onDrawerClose }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const user = useSelector((state) => state.stateUser.userInfo);
	const modals = useSelector((state) => state.stateGeneral.modals);

	const handleOpenModal = (value) => {
		// #modalUse step1
		onDrawerClose();
		dispatch(SET_MODALS({ [MODALS[value]]: true }));
	};

	const openConfirmLogoutModal = () => {
		dispatch(SET_MODALS({ [MODALS.generalModal]: true }));
	};

	return (
		<div className={s.menu}>
			<div className={s.menuHeader}>
				<div className="d-flex justify-content-between align-items-center mb-1">
					<Avatar src={IMAGE_URL + encodeURI(user.avatar)} size={38} />

					<CloseIcon onClick={onDrawerClose} />
				</div>

				<p className={s.name}>{user.username}</p>
				<p className={s.level}>Level {user.level}</p>
			</div>

			<div className={s.menuItem} onClick={() => navigate("/menu/rewards")}>
				<div className={s.iconContainer}>
					<div className={s.giftIcon} />
				</div>

				<p>Rewards</p>
			</div>

			<div className={s.menuItem} onClick={() => navigate("/menu/notification")}>
				<div className={s.iconContainer}>
					<div className={s.notifIcon} />
				</div>

				<p>notification</p>
			</div>

			<div onClick={openConfirmLogoutModal} className={s.menuItem}>
				<div className={s.iconContainer}>
					<div className={s.logoutIcon} />
				</div>

				<p>Logout</p>
			</div>

			<div className={s.deactivation}>
				<div className={s.iconContainer}>
					<div className={s.deactivationIcon} onClick={() => handleOpenModal("deactivation")} />
				</div>

				<p onClick={() => handleOpenModal("deactivation")}>deactivation</p>
			</div>

			{modals[MODALS.generalModal] && (
				<GeneralModal
					cb={() => navigate("/login")}
					actionText="Logout"
					question="Do you want to Log out of your account?"
				/>
			)}
		</div>
	);
};
export default Menu;
