import React from "react";

// Hooks
import { useListLoad } from "common/hooks/useListLoad";

// Components, Services, Functions
import LeaderboardTabPanelHeader from "./LeaderboardTabPanelHeader";
import LeaderboardTabPanelBody from "./LeaderboardTabPanelBody";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

const LeaderboardTabPanel = ({ type }) => {
	const { response, success, endOfList, fetchMore } = useListLoad(`/leaderboard/all`, 16);

	return (
		success && (
			<div className="w-100 h-100 tabPanel">
				{response.length > 0 && <LeaderboardTabPanelHeader dataLeaderboard={response} />}

				<LeaderboardTabPanelBody endOfList={endOfList} fetchMore={fetchMore} dataLeaderboard={response} />
			</div>
		)
	);
};
export default LeaderboardTabPanel;
