import React from "react";
import Search from "common/components/UI/Search";

import { useNavigate } from "react-router-dom";

import "./Header.scss";

// images
import desktopLogo from "assets/images/logo/logo-white.svg";
import notifIcon from "assets/images/icons/notifications.svg";

const DesktopHeader = () => {
	const navigate = useNavigate();

	return (
		<div className="_header-shadow desktop-header">
			<img src={desktopLogo} alt="logo" />

			<Search cb={() => {}} />

			<img src={notifIcon} alt="notifications" onClick={() => navigate("/menu/notification")} />
		</div>
	);
};

export default DesktopHeader;
