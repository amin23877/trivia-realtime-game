import React from "react";

import "./Sidebar.scss";

// image
import userImage from "assets/images/test/profile-pic-2.jpg";
import { ReactComponent as HomeLogo } from "assets/images/icons/home.svg";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<img className="sidebar-header__avatar" width={36} height={36} alt="user" src={userImage} />
				<p className="sidebar-header__info">
					<span className="sidebar-header__user-name">Ali_Reza</span>
					<span className="sidebar-header__phone">+93 788 502 257</span>
				</p>
			</div>

			<div className="quick-play-btn">Quick Play</div>

			<ul className="menu">
				<li className="menu__item">
					<HomeLogo />
					Home
				</li>
				<li className="menu__item">
					<HomeLogo />
					League
				</li>
				<li className="menu__item">
					<HomeLogo />
					Profile
				</li>
				<li className="menu__item">
					<HomeLogo />
					Leaderboard
				</li>
				<li className="menu__item">
					<HomeLogo />
					Wallet
				</li>
				<li className="menu__item">
					<HomeLogo />
					Settings
				</li>
				<li className="menu__item">
					<HomeLogo />
					Contact us
				</li>
				<li className="menu__item">
					<HomeLogo />
					Logout
				</li>
				<li className="menu__item">
					<HomeLogo />
					deactivation
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
