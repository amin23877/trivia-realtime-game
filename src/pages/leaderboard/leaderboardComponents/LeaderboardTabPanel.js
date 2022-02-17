import React from "react";

// Hooks
import { useRequest } from "common/hooks/useRequest";

// Components, Services, Functions
import LeaderboardTabPanelHeader from "./LeaderboardTabPanelHeader";
import LeaderboardTabPanelBody from "./LeaderboardTabPanelBody";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

const LeaderboardTabPanel = ({ type }) => {
	const { response, success } = useRequest("/leaderboard/all");

	return (
		success && (
			<div className="w-100 h-100 tabPanel">
				{response.length > 0 && <LeaderboardTabPanelHeader dataLeaderboard={response} />}

				<LeaderboardTabPanelBody dataLeaderboard={response} />
			</div>
		)
	);
};
export default LeaderboardTabPanel;
