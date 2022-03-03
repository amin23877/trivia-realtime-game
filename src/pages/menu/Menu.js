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

				<p>Rewards</p>
			</div>

			<div className={s.menuItem} onClick={() => navigate("/menu/notification")}>
				<div className={s.iconContainer}>
					<div className={s.notifIcon} />
				</div>

				<p>notification</p>
			</div>

			<div className={s.menuItem} onClick={() => navigate("/invite")}>
				<div className={s.iconContainer}>
					<div className={s.inviteIcon} />
				</div>

				<p>Invite friends</p>
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
