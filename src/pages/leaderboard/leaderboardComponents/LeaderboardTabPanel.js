import React from "react";

// Hooks
import { useListLoad } from "common/hooks/useListLoad";

// Components, Services, Functions
import LeaderboardTabPanelHeader from "./LeaderboardTabPanelHeader";
import LeaderboardTabPanelBody from "./LeaderboardTabPanelBody";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import { useRequest } from "common/hooks/useRequest";

const LeaderboardTabPanel = ({ type }) => {
	const { response: myPosition } = useRequest(`/generalleaderboard/${type}/me`);

	const { data, success, endOfList, fetchMore } = useListLoad(`/generalleaderboard/${type}`, 16);

	return (
		success && (
			<div className="w-100 h-100 tabPanel">
				<LeaderboardTabPanelHeader myPosition={myPosition} numberOne={data[0]} />

				<LeaderboardTabPanelBody endOfList={endOfList} fetchMore={fetchMore} dataLeaderboard={data} />
			</div>
		)
	);
};
export default LeaderboardTabPanel;
