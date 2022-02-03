// Reacts
import React from "react";
// Hooks
// Packages
// Components, Services, Functions
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import LeaderboardTabPanelHeader from "./LeaderboardTabPanelHeader";
import LeaderboardTabPanelBody from "./LeaderboardTabPanelBody";

const LeaderboardTabPanel = () => {
	return (
		<div className="w-100 h-100 tabPanel">
			<LeaderboardTabPanelHeader />
			<LeaderboardTabPanelBody />
		</div>
	);
};
export default LeaderboardTabPanel;
