// Reacts
import React from "react";

// Hooks
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import Avatar from "common/components/UI/Avatar";

// Redux
import { useDispatch } from "react-redux";
import { MODALS } from "common/values/MODALS";
import { SET_MODALS } from "redux/actions/mainActions/generalActions";

// Styles, Icons, Images
import "./Menu.scss";
import { ReactComponent as WalletIcon } from "assets/images/icons/wallet-icon-mobile.svg";
import { ReactComponent as LogoutIcon } from "assets/images/icons/logout-icon-mobile.svg";
import { ReactComponent as NotifIcon } from "assets/images/icons/notif-icon-mobile.svg";
import { ReactComponent as DeactivateIcon } from "assets/images/icons/deactivation-icon-mobile.svg";
import { ReactComponent as CloseIcon } from "assets/images/icons/close-drawer-icon.svg";

const Menu = ({ onDrawerClose }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const user = useSelector((state) => state.stateUser.userInfo);

	const handleOpenModal = (value) => {
		// #modalUse step1
		onDrawerClose();
		dispatch(SET_MODALS({ [MODALS[value]]: true }));
	};

	return (
		<div className="d-flex flex-column h-100 menu">
			<div className="menu-header">
				<div className="d-flex justify-content-between align-items-center mb-1">
					<Avatar src={IMAGE_URL + encodeURI(user.avatar)} size={38} />

					<div className="close">
						<CloseIcon onClick={onDrawerClose} />
					</div>
				</div>

				<p className="name">{user.username}</p>
				<p className="level">Level {user.level}</p>
			</div>
			<div className="menu-body">
				<div
					className="d-flex align-items-center menu-item _br-bottom"
					onClick={() => navigate("/menu/wallet")}
				>
					<WalletIcon className="icon" />
					<p>Wallet</p>
				</div>

				<div
					className="d-flex align-items-center menu-item _br-bottom"
					onClick={() => navigate("/menu/notification")}
				>
					<NotifIcon className="icon" />
					<p>notification</p>
				</div>

				{/* <div className="d-flex align-items-center menu-item _br-bottom">
					<SettingsOutlinedIcon className="icon" />
					<p>Settings</p>
				</div> */}

				{/* <div className="d-flex align-items-center menu-item _br-bottom">
					<ShareOutlinedIcon className="icon" />
					<p>introduce to friends</p>
				</div> */}

				{/* <div className="d-flex align-items-center menu-item _br-bottom">
					<HeadsetMicOutlinedIcon className="icon" />
					<p>Contact us</p>
				</div> */}

				{/* <div className="d-flex align-items-center menu-item _br-bottom">
					<CachedOutlinedIcon className="icon" />
					<p>Update</p>
				</div> */}

				<div onClick={() => navigate("/login")} className="d-flex align-items-center menu-item">
					<LogoutIcon className="icon" />
					<p>Logout</p>
				</div>
			</div>

			<div className="d-flex align-items-center menu-item deactivation mt-auto mb-0">
				<DeactivateIcon onClick={() => handleOpenModal("deactivation")} />
				<p onClick={() => handleOpenModal("deactivation")}>deactivation</p>
			</div>
		</div>
	);
};
export default Menu;
