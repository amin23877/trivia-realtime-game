import React from "react";
import Logo from "common/components/UI/Logo";

import { useNavigate } from "react-router-dom";

import s from "./Header.module.scss";

const MobileHeader = ({ onDrawerOpen }) => {
	const navigate = useNavigate();

	return (
		<div className={`_header-shadow ${s.mobileHeader}`}>
			<div className={s.menuIcon} onClick={onDrawerOpen} />

			<Logo className={s.logo} />

			<div className={s.leaderboardIcon} onClick={() => navigate("/leaderboard")} />
		</div>
	);
};

export default MobileHeader;
