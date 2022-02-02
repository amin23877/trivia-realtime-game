import React from "react";
import Search from "common/components/UI/Search";
import { useDispatch } from "react-redux";

import "./Header.scss";

// images
import desktopLogo from "assets/images/logo/logo-white.svg";
import notifIcon from "assets/images/icons/notifications.svg";
import { TOGGLE_NOTIF_DRAWER } from "redux/actions/mainActions/generalActions";

const DesktopHeader = () => {
	const dispatch = useDispatch();

	const handleToggleDrawer = () => {
		dispatch(TOGGLE_NOTIF_DRAWER());
	};

	return (
		<div className="_header-shadow desktop-header">
			<img src={desktopLogo} alt="logo" />

			<Search cb={() => {}} />

			<img className="_cursor-pointer" src={notifIcon} alt="notifications" onClick={handleToggleDrawer} />
		</div>
	);
};

export default DesktopHeader;
