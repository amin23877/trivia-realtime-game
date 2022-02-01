import React from "react";

import "./Sidebar.scss";

// image
import userImage from "assets/images/test/profile-pic-2.jpg";
import { ReactComponent as HomeIcon } from "assets/images/icons/home.svg";
import { ReactComponent as LeagueIcon } from "assets/images/icons/league.svg";
import { ReactComponent as UserIcon } from "assets/images/icons/user-icon.svg";
import { ReactComponent as LeaderBoardIcon } from "assets/images/icons/leaderboard.svg";
import { ReactComponent as SettingsIcon } from "assets/images/icons/settings-icon.svg";
import { ReactComponent as ContactIcon } from "assets/images/icons/contact-us.svg";
import { ReactComponent as LogoutIcon } from "assets/images/icons/logout.svg";
import { ReactComponent as DeactivateIcon } from "assets/images/icons/deactivation.svg";
import { ReactComponent as WalletIcon } from "assets/images/icons/wallet-icon.svg";

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

			<ul className="sidebar-menu">
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<HomeIcon />
					Home
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<LeagueIcon />
					League
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<UserIcon />
					Profile
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<LeaderBoardIcon />
					Leaderboard
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<WalletIcon />
					Wallet
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<SettingsIcon />
					Settings
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<ContactIcon />
					Contact us
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<LogoutIcon />
					Logout
				</li>
				<li className="sidebar-menu-item sidebar-menu-item_red sidebar-menu-item_hover-effect-red">
					<DeactivateIcon />
					deactivation
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
