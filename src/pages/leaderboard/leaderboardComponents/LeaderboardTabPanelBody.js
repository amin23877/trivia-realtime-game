// Reacts
import React from "react";

// Packages
import _ from "lodash";

// Components, Services, Functions
import EmptyList from "common/components/empties/EmptyList";
import { List, ListFooter, ListItem } from "common/components/UI/list/List";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

const LeaderboardTabPanelBody = ({ dataLeaderboard, endOfList, fetchMore }) => {
	return (
		<div className="w-100 h-100 tabPanelBody">
			{!dataLeaderboard?.length && <EmptyList />}

			{dataLeaderboard?.length > 3 && (
				<List>
					{_.slice(dataLeaderboard, 3, dataLeaderboard?.length).map((el, index) => (
						<ListItem
							key={index}
							index={index + 2}
							username={el?.UserId?.username || el?.username}
							avatar={el?.UserId?.avatar || el?.avatar}
						>
							<p className="list-point-number">{el?.xp} points</p>
						</ListItem>
					))}

					{!endOfList && <ListFooter onClick={fetchMore}>See more</ListFooter>}
				</List>
			)}
		</div>
	);
};
export default LeaderboardTabPanelBody;
