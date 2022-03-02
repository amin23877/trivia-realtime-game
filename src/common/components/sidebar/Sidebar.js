import React from "react";
import Avatar from "common/components/UI/Avatar";
import ModalConfirmDeactivation from "common/components/modals/ModalConfirmDeactivation";
import ModalLogoutConfirm from "common/components/modals/ModalLogoutConfirm";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_GAME_SELECTION_TYPE, SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";

import "./Sidebar.scss";

// image
import { IMAGE_URL } from "common/values/CORE";

const menuItems = [
	{ name: "Home", route: "/", icon: "home-icon" },
	{ name: "League", route: "/leagues", icon: "league-icon" },
	{ name: "Profile", route: "/profile", icon: "profile-icon" },
	{ name: "Leaderboard", route: "/leaderboard", icon: "leaderboard-icon" },
	{ name: "Rewards", route: "/menu/rewards", icon: "gift-icon" },
];

const Sidebar = () => {
	const user = useSelector((state) => state.stateUser.userInfo);
	const dispatch = useDispatch();

	const handleQuickPlay = () => {
		dispatch(SET_GAME_SELECTION_TYPE({ type: "quickPlay", id: null }));
		dispatch(SET_OPEN_GAME_TYPES(true));
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

			<div className="quick-play-btn" onClick={handleQuickPlay}>
				Quick Play
			</div>

			<ul className="sidebar-menu">
				{menuItems.map((item, index) => (
					<NavLink key={index} to={item.route}>
						{({ isActive }) => (
							<li
								className={`
									sidebar-menu-item sidebar-menu-item_hover-effect-purple 
									${isActive ? "sidebar-menu-item_active" : ""}
								`}
							>
								<div className={item.icon} />
								{item.name}
							</li>
						)}
					</NavLink>
				))}

				<ModalLogoutConfirm
					renderButton={(handleOpen) => (
						<li onClick={handleOpen} className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
							<div className="logout-icon" />
							Logout
						</li>
					)}
				/>

				<ModalConfirmDeactivation
					renderButton={(handleOpen) => (
						<li
							onClick={handleOpen}
							className="sidebar-menu-item sidebar-menu-item_red sidebar-menu-item_hover-effect-red"
						>
							<div className="deactivation-icon" />
							deactivation
						</li>
					)}
				/>
			</ul>
		</div>
	);
};

export default Sidebar;
