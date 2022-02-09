// Reacts
import React, { useEffect } from "react";
// Hooks
// Packages
// Components, Services, Functions
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
import LeaderboardTabs from "./leaderboardComponents/LeaderboardTabs";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";
// Redux
import { useDispatch } from "react-redux";
import { SET_TYPE_LEADERBOARD_COMPONENT } from "redux/actions/mainActions/generalActions";
// Material - lab
// Styles, Icons, Images
import "./Leaderboard.scss";

const Leaderboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			dispatch(SET_TYPE_LEADERBOARD_COMPONENT(TYPE_LEADERBOARD_COMPONENT.GENERAL));
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="fadeInFast w-100 h-100 leaderboard">
			<HeaderGoBack title="General Leaderboard" />
			<div className="_body-height-H leaderboard-body">
				<LeaderboardTabs />
			</div>
		</div>
	);
};
export default Leaderboard;
