import React from "react";
import ModalConfirmDeactivation from "common/components/modals/ModalConfirmDeactivation";
import ModalLogoutConfirm from "common/components/modals/ModalLogoutConfirm";
import FilledButton from "common/components/UI/button/FilledButton";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_GAME_SELECTION_TYPE, SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";

import "./Sidebar.scss";

// image
import CardUser from "common/components/cardUser/CardUser";
import Text from "common/components/UI/text/Text";

const menuItems = [
	{ ns: "menu.home", route: "/", icon: "home-icon" },
	{ ns: "menu.leagues", route: "/leagues", icon: "league-icon" },
	{ ns: "menu.profile", route: "/profile", icon: "profile-icon" },
	{ ns: "menu.top-players", route: "/leaderboard", icon: "leaderboard-icon" },
	{ ns: "menu.rewards", route: "/menu/rewards", icon: "gift-icon" },
	{ ns: "menu.settings", route: "/settings", icon: "settings-icon" },
	{ ns: "menu.invite-friends", route: "/invite", icon: "invite-icon" },
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
				<CardUser
					id={user._id}
					avatar={user.avatar}
					info={user.phone}
					username={user.username}
					avatarSize={38}
				/>
			</div>

			<FilledButton
				ns="btn.quick-play"
				variant="secondary"
				className="quick-play-btn"
				onClick={handleQuickPlay}
			/>

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
								<Text ns={item.ns} />
							</li>
						)}
					</NavLink>
				))}

				<ModalLogoutConfirm
					renderButton={(handleOpen) => (
						<li onClick={handleOpen} className="sidebar-menu-item sidebar-menu-item_hover-effect-purple">
							<div className="logout-icon" />
							<Text ns="menu.logout" />
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
							<Text ns="menu.deactivate" />
						</li>
					)}
				/>
			</ul>
		</div>
	);
};

export default Sidebar;
