// Reacts
import React from "react";

// Packages
import _ from "lodash";

// Components, Services, Functions
import { LeaderboardList, LeaderboardListItem } from "pages/leaderboard/leaderboardComponents/LeaderboardList";
import EmptyList from "common/components/empties/EmptyList";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";

// Redux
import { useSelector } from "react-redux";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

const LeaderboardTabPanelBody = ({ dataLeaderboard }) => {
	const stateGeneral = useSelector((state) => state.stateGeneral);

	const indexStart = stateGeneral.typeLeaderboardComponent !== TYPE_LEADERBOARD_COMPONENT.GENERAL ? 4 : 2;

	const isInnerLeague = stateGeneral.typeLeaderboardComponent === TYPE_LEADERBOARD_COMPONENT.INNER_LEAGUE;

	return (
		<div className="w-100 h-100 tabPanelBody">
			{!dataLeaderboard?.length && <EmptyList />}

			{dataLeaderboard?.length > 3 && (
				<LeaderboardList isInnerLeague={isInnerLeague}>
					{_.slice(dataLeaderboard, 3, dataLeaderboard?.length).map((el, index) => (
						<LeaderboardListItem
							isInnerLeague={isInnerLeague}
							key={index}
							index={index + indexStart}
							username={el?.UserId?.username}
							avatar={el?.UserId?.avatar}
							reward={el?.reward}
							point={el?.point}
							score={el?.score}
						/>
					))}
				</LeaderboardList>
			)}
		</div>
	);
};
export default LeaderboardTabPanelBody;
