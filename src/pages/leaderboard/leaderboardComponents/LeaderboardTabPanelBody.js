// Reacts
import React from "react";

// Packages
import _ from "lodash";

// Components, Services, Functions
import EmptyLeaderboard from "common/components/empties/EmptyLeaderboard";
import { List, ListFooter, ListItem } from "common/components/UI/list/List";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import Text from "common/components/UI/text/Text";

const LeaderboardTabPanelBody = ({ dataLeaderboard, endOfList, fetchMore }) => {
	return (
		<div className="w-100 h-100 tabPanelBody">
			{dataLeaderboard?.length === 0 && <EmptyLeaderboard />}

			{dataLeaderboard?.length > 1 && (
				<List>
					{_.slice(dataLeaderboard, 1, dataLeaderboard?.length).map((el, index) => (
						<ListItem
							key={index}
							index={index + 2}
							username={el?.UserId?.username}
							userId={el?.UserId._id}
							avatar={el?.UserId?.avatar}
						>
							<p className="list-point-number">
								{el?.score} <Text as="span" ns="score" />
							</p>
						</ListItem>
					))}

					{!endOfList && <ListFooter onClick={fetchMore}>See more</ListFooter>}
				</List>
			)}
		</div>
	);
};
export default LeaderboardTabPanelBody;
