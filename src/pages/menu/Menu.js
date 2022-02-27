import React from "react";

// Hooks
// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import Avatar from "common/components/UI/Avatar";
import ModalConfirmDeactivation from "common/components/modals/ModalConfirmDeactivation";
import ModalLogoutConfirm from "common/components/modals/ModalLogoutConfirm";

// Styles, Icons, Images
import s from "./Menu.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/icons/close-drawer-icon.svg";

const Menu = ({ onDrawerClose }) => {
	const navigate = useNavigate();

	const user = useSelector((state) => state.stateUser.userInfo);

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

			<ModalLogoutConfirm
				renderButton={(handleOpen) => (
					<div onClick={handleOpen} className={s.menuItem}>
						<div className={s.iconContainer}>
							<div className={s.logoutIcon} />
						</div>

						<p>Logout</p>
					</div>
				)}
			/>

			<ModalConfirmDeactivation
				renderButton={(handleOpen) => (
					<div onClick={handleOpen} className={s.deactivation}>
						<div className={s.iconContainer}>
							<div className={s.deactivationIcon} />
						</div>

						<p>deactivation</p>
					</div>
				)}
			/>
		</div>
	);
};
export default Menu;
