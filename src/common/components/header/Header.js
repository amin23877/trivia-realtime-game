import React from "react";
import Search from "common/components/UI/Search";

import { useNavigate } from "react-router-dom";

import "./Header.scss";

// images
import mobileLogo from "assets/images/icons/header-logo.svg";
import desktopLogo from "assets/images/logo/logo-white.svg";
import iconMenu from "assets/images/icons/header-menu.svg";
import iconLeaderboard from "assets/images/icons/icon-leaderboard.svg";
import notifIcon from "assets/images/icons/notifications.svg";

const Header = ({ onDrawerOpen }) => {
	const navigate = useNavigate();

	return (
		<div className="_header-shadow header">
			{/* show toggle menu button in mobile */}
			<img width={24} className="d-xl-none" src={iconMenu} onClick={onDrawerOpen} alt="" />

			{/* show appropriate logo based screen size*/}
			<img className="d-xl-none" src={mobileLogo} alt="logo" />
			<img className="d-none d-xl-inline" src={desktopLogo} alt="logo" />

			{/* search bar showed in desktop */}
			<div className="d-none d-xl-block">
				<Search cb={() => {}} />
			</div>

			{/* show leader board button in mobile and notification icon in desktop */}
			<img className="d-xl-none" src={iconLeaderboard} alt="" onClick={() => navigate("/leaderboard")} />
			<img
				className="d-none d-xl-inline"
				src={notifIcon}
				alt="notifications"
				onClick={() => navigate("/menu/notification")}
			/>
		</div>
	);
};

export default Header;
