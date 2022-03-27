import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Outlet } from "react-router-dom";

import DesktopHeader from "common/components/header/DesktopHeader";
import Sidebar from "common/components/sidebar/Sidebar";
import Footer from "common/components/footer/Footer";
import Loading from "common/components/loading/Loading";
import SelectGameType from "pages/home/homeComponents/selectGameType/SelectGameType";
import NotificationWidget from "common/components/notificationWidget/NotificationWidget";

import { fetchUser } from "redux/actions/userActions/userActions";
import { fetchNotif } from "redux/reducers/notifReducer/notifReducer";
import { SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";

import "./MainLayout.scss";

const MainLayout = ({ footer = false, sidebar = true }) => {
	const { i18n } = useTranslation();
	const dispatch = useDispatch();

	const { openGameTypes, openNotifDrawer } = useSelector((state) => state.stateGeneral);
	const loadUserStatus = useSelector((state) => state.stateUser.status);
	const userInfo = useSelector((state) => state.stateUser.userInfo);

	useEffect(() => {
		// get user data only in first load
		if (loadUserStatus === "idle") dispatch(fetchUser());

		dispatch(fetchNotif());
	}, [dispatch, loadUserStatus]);

	/* initialize user language */
	useEffect(() => {
		if (loadUserStatus === "success") {
			i18n.changeLanguage(userInfo.language);
		}
	}, [i18n, loadUserStatus, userInfo.language]);

	if (loadUserStatus === "loading" || loadUserStatus === "idle") {
		return <Loading variant="full-page" />;
	}

	return (
		<div className="main-layout">
			<aside className={`main-layout__notif-drawer ${openNotifDrawer ? "main-layout__notif-drawer_open" : ""}`}>
				<NotificationWidget />
			</aside>

			<header className="main-layout__desktop-header">
				<DesktopHeader />
			</header>

			{sidebar && (
				<aside className="main-layout__sidebar">
					<Sidebar />
				</aside>
			)}

			<main
				className={`main-layout__content 
				${footer ? "_body-height-F" : ""} 
				${sidebar ? "main-layout__content_with-sidebar" : ""}`}
			>
				<Outlet />
			</main>

			{footer && (
				<footer className="main-layout__footer">
					<Footer />
				</footer>
			)}

			{openGameTypes && (
				<SelectGameType
					open={openGameTypes}
					handleOpenGameTypes={() => {
						dispatch(SET_OPEN_GAME_TYPES(false));
					}}
				/>
			)}
		</div>
	);
};

export default MainLayout;
