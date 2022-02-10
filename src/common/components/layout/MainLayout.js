import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import DesktopHeader from "common/components/header/DesktopHeader";
import Sidebar from "common/components/sidebar/Sidebar";
import Footer from "common/components/footer/Footer";
import SelectGameType from "pages/home/homeComponents/selectGameType/SelectGameType";
import NotificationWidget from "common/components/NotificationWidget/NotificationWidget";
import ModalConfirmDeactivation from "pages/modals/ModalConfirmDeactivation";

import { fetchUser } from "redux/actions/userActions/userActions";
import { SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";
import { MODALS } from "common/values/MODALS";

import "./MainLayout.scss";

const MainLayout = ({ footer = false }) => {
	const dispatch = useDispatch();
	const { openGameTypes, openNotifDrawer, modals } = useSelector((state) => state.stateGeneral);

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<div className="main-layout">
			<aside className={`main-layout__notif-drawer ${openNotifDrawer ? "main-layout__notif-drawer_open" : ""}`}>
				<NotificationWidget />
			</aside>

			<header className="main-layout__desktop-header">
				<DesktopHeader />
			</header>

			<aside className="main-layout__sidebar">
				<Sidebar />
			</aside>

			<main className={`main-layout__content ${footer ? "_body-height-F" : ""}`}>
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

			{/* #modalUse step0 */}
			{modals[MODALS.deactivation] && <ModalConfirmDeactivation />}
		</div>
	);
};

export default MainLayout;
