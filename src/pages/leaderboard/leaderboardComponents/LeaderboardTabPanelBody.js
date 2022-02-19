// Reacts
import React from "react";

// Packages
import _ from "lodash";

// Components, Services, Functions
import { LeaderboardList, LeaderboardListItem } from "pages/leaderboard/leaderboardComponents/LeaderboardList";
import EmptyList from "common/components/empties/EmptyList";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

const LeaderboardTabPanelBody = ({ dataLeaderboard }) => {
	return (
		<div className="w-100 h-100 tabPanelBody">
			{!dataLeaderboard?.length && <EmptyList />}

			{dataLeaderboard?.length > 3 && (
				<LeaderboardList>
					{_.slice(dataLeaderboard, 3, dataLeaderboard?.length).map((el, index) => (
						<LeaderboardListItem
							key={index}
							index={index + 2}
							username={el?.UserId?.username || el?.username}
							avatar={el?.UserId?.avatar || el?.avatar}
							point={el?.xp}
						/>
					))}
				</LeaderboardList>
			)}
		</div>
	);
};
export default LeaderboardTabPanelBody;
