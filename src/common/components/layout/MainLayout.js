import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import DesktopHeader from "common/components/header/DesktopHeader";
import Sidebar from "common/components/sidebar/Sidebar";
import Footer from "common/components/footer/Footer";
import SelectGameType from "pages/home/homeComponents/selectGameType/SelectGameType";

import "./MainLayout.scss";

const MainLayout = ({ footer = false }) => {
	const openGameTypes = useSelector((state) => state.stateGeneral.openGameTypes);

	return (
		<div className="main-layout">
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
					handleOpenGameTypes={() => {}}
					// handleOpenGameTypes={() => {
					// 	dispatch(SET_OPEN_GAME_TYPES(true));
					// }}
				/>
			)}
		</div>
	);
};

export default MainLayout;
