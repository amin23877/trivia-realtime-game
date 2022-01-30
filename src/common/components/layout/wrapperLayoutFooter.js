// Reacts
import React from "react";
import { Outlet } from "react-router-dom";
// Hooks
// Packages
// Components, Services, Functions
import Footer from "common/components/footer/Footer";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./wrapperLayoutFooter.scss";
import SelectGameType from "pages/home/homeComponents/selectGameType/SelectGameType";
import { SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";

const WrapperLayoutFooter = () => {
	const dispatch = useDispatch();
	const stateGeneral = useSelector((state) => state.stateGeneral);
	// console.log(stateGeneral);

	return (
		<div className="w-100 h-100 wrapperLayoutFooter">
			<div className="_body-height-F">
				<Outlet />
			</div>

			<div className="_footer d-xl-none">
				<Footer />
			</div>

			{stateGeneral.openGameTypes && (
				<SelectGameType
					open={stateGeneral.openGameTypes}
					handleOpenGameTypes={() => {}}
					// handleOpenGameTypes={() => {
					// 	dispatch(SET_OPEN_GAME_TYPES(true));
					// }}
				/>
			)}
		</div>
	);
};

export default WrapperLayoutFooter;
