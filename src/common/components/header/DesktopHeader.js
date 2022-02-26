import React from "react";
import Logo from "common/components/UI/Logo";
import { SearchExploreBox } from "pages/searchExplore/SearchExploreBox";
import { useDispatch } from "react-redux";
import { TOGGLE_NOTIF_DRAWER } from "redux/actions/mainActions/generalActions";

import s from "./Header.module.scss";

// images
import notifIcon from "assets/images/icons/notifications.svg";

const DesktopHeader = () => {
	const dispatch = useDispatch();

	const handleToggleDrawer = () => {
		dispatch(TOGGLE_NOTIF_DRAWER());
	};

	return (
		<div className={`_header-shadow ${s.desktopHeader}`}>
			<Logo color="white" className={s.desktopLogo} />

			<SearchExploreBox />

			<img className="_cursor-pointer" src={notifIcon} alt="notifications" onClick={handleToggleDrawer} />
		</div>
	);
};

export default DesktopHeader;
