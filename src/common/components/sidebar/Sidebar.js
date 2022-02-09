import React from "react";
import Avatar from "common/components/UI/Avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODALS } from "redux/actions/mainActions/generalActions";
import { MODALS } from "common/values/MODALS";

import "./Sidebar.scss";

// image
import { ReactComponent as HomeIcon } from "assets/images/icons/home.svg";
import { ReactComponent as LeagueIcon } from "assets/images/icons/league.svg";
import { ReactComponent as UserIcon } from "assets/images/icons/user-icon.svg";
import { ReactComponent as LeaderBoardIcon } from "assets/images/icons/leaderboard.svg";
import { ReactComponent as SettingsIcon } from "assets/images/icons/settings-icon.svg";
import { ReactComponent as ContactIcon } from "assets/images/icons/contact-us.svg";
import { ReactComponent as LogoutIcon } from "assets/images/icons/logout.svg";
import { ReactComponent as DeactivateIcon } from "assets/images/icons/deactivation.svg";
import { ReactComponent as WalletIcon } from "assets/images/icons/wallet-icon.svg";
import { IMAGE_URL } from "common/values/CORE";

const Sidebar = () => {
	const user = useSelector((state) => state.stateUser.userInfo);
	const dispatch = useDispatch();

	const openDeactivateModal = () => {
		dispatch(SET_MODALS({ [MODALS.deactivation]: true }));
	};

	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<Avatar src={IMAGE_URL + encodeURI(user.avatar)} size={36} />

				<p className="sidebar-header__info">
					<span className="sidebar-header__user-name">{user.username}</span>
					<span className="sidebar-header__phone">{user.phone}</span>
				</p>
			</div>

			<div className="quick-play-btn">Quick Play</div>

			<ul className="sidebar-menu">
				<Link to="/">
					<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
						<HomeIcon />
						Home
					</li>
				</Link>

				<Link to="/leagues">
					<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
						<LeagueIcon />
						League
					</li>
				</Link>

				<Link to="/profile">
					<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
						<UserIcon />
						Profile
					</li>
				</Link>

				<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
					<LeaderBoardIcon />
					Leaderboard
				</li>

				<Link to="/menu/wallet">
					<li className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
						<WalletIcon />
						Wallet
					</li>
				</Link>

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

				<li
					onClick={openDeactivateModal}
					className="sidebar-menu-item sidebar-menu-item_red sidebar-menu-item_hover-effect-red"
				>
					<DeactivateIcon />
					deactivation
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
