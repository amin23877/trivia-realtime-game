// Reacts
import React from "react";
// Hooks
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
// Redux
import { useDispatch } from "react-redux";
import { SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";
// Material - lab
// Styles, Icons, Images
import "./Footer.scss";
import iconHome from "assets/images/icons/footer-home.svg";
import iconLeague from "assets/images/icons/footer-league.svg";
import iconPlay from "assets/images/icons/footer-play.svg";
import iconSearch from "assets/images/icons/footer-search.svg";
import iconProfile from "assets/images/icons/footer-profile.svg";
import iconHomeActive from "assets/images/icons/footer-home-active.svg";
import iconLeagueActive from "assets/images/icons/footer-league-active.svg";
import iconSearchActive from "assets/images/icons/footer-search-active.svg";
import iconProfileActive from "assets/images/icons/footer-profile-active.svg";

const Footer = ({ handleOpenGameTypes }) => {
	const location = useLocation();
	const pathname = location.pathname;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const menu = [
		{
			title: "Home",
			type: "HOME",
			pathname: "/",
			path: "/",
			isCenter: false,
			icon: iconHome,
			iconActive: iconHomeActive,
		},
		{
			title: "League",
			type: "LEAGUE",
			pathname: "/league",
			path: "/leagues",
			isCenter: false,
			icon: iconLeague,
			iconActive: iconLeagueActive,
		},
		{
			title: "",
			type: "PLAY",
			pathname: "/play",
			path: "/quickPlay",
			isCenter: true,
			icon: iconPlay,
			iconActive: iconPlay,
		},
		{
			title: "Search",
			type: "SEARCH",
			pathname: "/search",
			path: "/search",
			isCenter: false,
			icon: iconSearch,
			iconActive: iconSearchActive,
		},
		{
			title: "Profile",
			type: "PROFILE",
			pathname: "/profile",
			path: "/profile",
			isCenter: false,
			icon: iconProfile,
			iconActive: iconProfileActive,
		},
	];

	const handleNavigate = (path) => {
		// console.log(path);
		if (path === "/quickPlay") {
			handleOpenGameTypes(true);
		} else {
			navigate(path);
		}
	};

	const handleOnClickFooter = (item) => {
		// console.log(item);
		switch (item.type) {
			case "PLAY":
				dispatch(SET_OPEN_GAME_TYPES(true));
				break;
			default:
				dispatch(SET_OPEN_GAME_TYPES(false));
				handleNavigate(item.path);
				break;
		}
	};

	return (
		<div className="d-flex justify-content-between align-items-center footer">
			{menu.map((el, index) => (
				<div
					key={index}
					className={`d-flex flex-column justify-content-between align-items-center icons ${
						el.isCenter ? "icon-center" : ""
					}`}
					// onClick={() => handleNavigate(el.path)}
					onClick={(e) => handleOnClickFooter(el)}
				>
					{pathname.includes(el.pathname) ? <img src={el.iconActive} alt="" /> : <img src={el.icon} alt="" />}
					<p className={`${pathname.includes(el.pathname) ? "p-active" : ""}`}>{el.title}</p>
				</div>
			))}
		</div>
	);
};

export default Footer;
