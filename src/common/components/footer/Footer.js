// Reacts
import React from "react";
// Hooks
import { useLocation, useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
// Redux
import { useDispatch } from "react-redux";
import { SET_GAME_SELECTION_TYPE, SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";
// Material - lab
// Styles, Icons, Images
import s from "./Footer.module.scss";
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
			isActivated: false,
			icon: iconHome,
			iconActive: iconHomeActive,
		},
		{
			title: "League",
			type: "LEAGUE",
			pathname: "/league",
			path: "/leagues",
			isCenter: false,
			isActivated: false,
			icon: iconLeague,
			iconActive: iconLeagueActive,
		},
		{
			title: "",
			type: "PLAY",
			pathname: "/play",
			path: "/quickPlay",
			isCenter: true,
			isActivated: false,
			icon: iconPlay,
			iconActive: iconPlay,
		},
		{
			title: "Search",
			type: "SEARCH",
			pathname: "/search",
			path: "/search",
			isCenter: false,
			isActivated: false,
			icon: iconSearch,
			iconActive: iconSearchActive,
		},
		{
			title: "Profile",
			type: "PROFILE",
			pathname: "/profile",
			path: "/profile",
			isCenter: false,
			isActivated: false,
			icon: iconProfile,
			iconActive: iconProfileActive,
		},
	];

	const setPathNameArray = (type) => {
		let pathNameArray = [];
		menu.forEach((el) => {
			if (el.type !== type) pathNameArray.push(el.pathname);
		});
		return pathNameArray;
	};
	const pathNameArray = setPathNameArray("HOME");

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
				dispatch(SET_GAME_SELECTION_TYPE({ type: "quickPlay", id: null }));
				dispatch(SET_OPEN_GAME_TYPES(true));
				break;
			default:
				dispatch(SET_OPEN_GAME_TYPES(false));
				handleNavigate(item.path);
				break;
		}
	};

	return (
		<div className={s.footer}>
			{menu.map((el, index) => (
				<div
					key={index}
					className={`${s.icons} ${el.isCenter ? s.iconCenter : ""}`}
					// onClick={() => handleNavigate(el.path)}
					onClick={(e) => handleOnClickFooter(el)}
				>
					{el.type !== "HOME" ? (
						<>
							{pathname.includes(el.pathname) ? (
								<img src={el.iconActive} alt="" />
							) : (
								<img src={el.icon} alt="" />
							)}
							<p className={`${pathname.includes(el.pathname) ? "p-active" : ""}`}>{el.title}</p>
						</>
					) : (
						<>
							{!pathNameArray.some((el) => pathname.includes(el)) ? (
								<img src={el.iconActive} alt="" />
							) : (
								<img src={el.icon} alt="" />
							)}
							<p className={`${!pathNameArray.some((el) => pathname.includes(el)) ? "p-active" : ""}`}>
								{el.title}
							</p>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default Footer;
