// Reacts
import React from "react";

// Components, Services, Functions
import LeaderboardTabs from "./leaderboardComponents/LeaderboardTabs";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";

// Styles, Icons, Images
import "./Leaderboard.scss";

const Leaderboard = () => {
	return (
		<div className="fadeInFast w-100 leaderboard">
			<HeaderGoBack title="menu.top-players" />
			<div className="leaderboard-body">
				<LeaderboardTabs />
			</div>
		</div>
	);
};
export default Leaderboard;
