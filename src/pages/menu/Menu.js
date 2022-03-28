import React from "react";

// Hooks
// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components, Services, Functions
import CardUser from "common/components/cardUser/CardUser";
import ModalConfirmDeactivation from "common/components/modals/ModalConfirmDeactivation";
import ModalLogoutConfirm from "common/components/modals/ModalLogoutConfirm";

// Styles, Icons, Images
import s from "./Menu.module.scss";
import Text from "common/components/UI/text/Text";

const Menu = ({ onDrawerClose }) => {
	const navigate = useNavigate();

	const user = useSelector((state) => state.stateUser.userInfo);

	return (
		<div className={s.menu}>
			<div className={s.menuHeader}>
				<CardUser
					id={user._id}
					avatar={user.avatar}
					avatarSize={36}
					info={`Level ${user.level}`}
					username={user.username}
					classes={{
						container: s.cardUser,
						username: s.name,
						info: s.level,
					}}
				/>

				<div onClick={onDrawerClose} className={s.closeButton} />
			</div>

			<div className={s.menuItem} onClick={() => navigate("/menu/rewards")}>
				<div className={s.iconContainer}>
					<div className={s.giftIcon} />
				</div>

				<Text ns="menu.rewards" />
			</div>

			<div className={s.menuItem} onClick={() => navigate("/menu/notification")}>
				<div className={s.iconContainer}>
					<div className={s.notifIcon} />
				</div>

				<Text ns="notifs" />
			</div>

			<div className={s.menuItem} onClick={() => navigate("/settings")}>
				<div className={s.iconContainer}>
					<div className={s.settingsIcon} />
				</div>

				<Text ns="menu.settings" />
			</div>

			<div className={s.menuItem} onClick={() => navigate("/invite")}>
				<div className={s.iconContainer}>
					<div className={s.inviteIcon} />
				</div>

				<Text ns="menu.invite-friends" />
			</div>

			<ModalLogoutConfirm
				renderButton={(handleOpen) => (
					<div onClick={handleOpen} className={s.menuItem}>
						<div className={s.iconContainer}>
							<div className={s.logoutIcon} />
						</div>

						<Text ns="menu.logout" />
					</div>
				)}
			/>

			<ModalConfirmDeactivation
				renderButton={(handleOpen) => (
					<div onClick={handleOpen} className={s.deactivation}>
						<div className={s.iconContainer}>
							<div className={s.deactivationIcon} />
						</div>

						<Text ns="menu.deactivate" />
					</div>
				)}
			/>
		</div>
	);
};
export default Menu;
