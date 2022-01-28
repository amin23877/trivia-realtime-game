// Reacts
import React from "react";
// Hooks
// Packages
// Components, Services, Functions
import LeaderboardTabs from "./leaderboardComponents/LeaderboardTabs";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";
// Redux
// Material - lab
// Styles, Icons, Images
import "./Leaderboard.scss";

const Leaderboard = () => {
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
