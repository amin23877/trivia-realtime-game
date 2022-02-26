import React from "react";
import Avatar from "common/components/UI/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_GAME_SELECTION_TYPE, SET_MODALS, SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";
import { MODALS } from "common/values/MODALS";

import "./Sidebar.scss";

// image
import { IMAGE_URL } from "common/values/CORE";
import GeneralModal from "pages/modals/GeneralModal";

const menuItems = [
	{ name: "Home", route: "/", icon: "home-icon" },
	{ name: "League", route: "/leagues", icon: "league-icon" },
	{ name: "Profile", route: "/profile", icon: "profile-icon" },
	{ name: "Leaderboard", route: "/leaderboard", icon: "leaderboard-icon" },
	{ name: "Rewards", route: "/menu/rewards", icon: "gift-icon" },
];

const Sidebar = () => {
	const user = useSelector((state) => state.stateUser.userInfo);
	const modals = useSelector((state) => state.stateGeneral.modals);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const openDeactivateModal = () => {
		dispatch(SET_MODALS({ [MODALS.deactivation]: true }));
	};

	const openConfirmLogoutModal = () => {
		dispatch(SET_MODALS({ [MODALS.generalModal]: true }));
	};

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

				<li
					onClick={openConfirmLogoutModal}
					className="sidebar-menu-item sidebar-menu-item_hover-effect-purple"
				>
					<div className="logout-icon" />
					Logout
				</li>

				<li
					onClick={openDeactivateModal}
					className="sidebar-menu-item sidebar-menu-item_red sidebar-menu-item_hover-effect-red"
				>
					<div className="deactivation-icon" />
					deactivation
				</li>
			</ul>

			{modals[MODALS.generalModal] && (
				<GeneralModal
					cb={() => navigate("/login")}
					actionText="Logout"
					question="Do you want to Log out of your account?"
				/>
			)}
		</div>
	);
};

export default Sidebar;
