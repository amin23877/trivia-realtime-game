import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.scss";
import logo from "assets/images/icons/header-logo.svg";
import iconMenu from "assets/images/icons/header-menu.svg";
import iconLeaderboard from "assets/images/icons/icon-leaderboard.svg";

const Header = ({ onDrawerOpen }) => {
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		<div className="d-flex justify-content-between align-items-center _header-shadow header">
			{/* <img src={iconMenu} onClick={() => handleNavigate('/menu')} alt='' /> */}
			<img src={iconMenu} onClick={onDrawerOpen} alt="" />
			<img src={logo} alt="" />
			<img src={iconLeaderboard} alt="" onClick={() => handleNavigate("/leaderboard")} />
		</div>
	);
};

export default Header;
