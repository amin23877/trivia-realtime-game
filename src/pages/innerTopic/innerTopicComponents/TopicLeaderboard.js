import React, { useState } from "react";
import _ from "lodash";
import Tabs from "common/components/UI/tabs/Tabs";
import BestPlayers from "common/components/bestPlayers/BestPlayers";
import { List, ListFooter, ListHeader, ListItem } from "common/components/UI/list/List";
import { useListLoad } from "common/hooks/useListLoad";

import s from "../InnerTopic.module.scss";

const tabs = [
	{ label: "All points", value: "all" },
	{ label: "Daily", value: "day" },
	{ label: "Weekly", value: "week" },
	{ label: "Monthly", value: "month" },
];

const TopicLeaderboard = ({ id }) => {
	const [timespan, setTimespan] = useState("all");

	const { response, success, endOfList, fetchMore } = useListLoad(`topicleaderboard/${id}/${timespan}`, 10);

	const handleTimespan = (event, newValue) => {
		setTimespan(newValue);
	};

	return (
		success && (
			<div className="mt-4">
				<Tabs activeTab={timespan} onChange={handleTimespan} tabs={tabs} />

				<p className={s.yourPosition}>
					Your position : <span>should fixed</span>
				</p>

				<div className="_leaderboardContainer">
					<BestPlayers className="mt-5" theBest={_.slice(response.result, 0, 3)} />

					<List className="mt-3 mt-xl-4">
						<ListHeader>
							<p className={s.pointText}>point</p>
						</ListHeader>

						{_.slice(response.result, 3, response.result.length).map((player, index) => (
							<ListItem
								key={index}
								index={index + 4}
								username={player.UserId.username || player.username}
								avatar={player.UserId.avatar || player.avatar}
							>
								<p className={s.pointNumber}>{player.xp}</p>
							</ListItem>
						))}

						{!endOfList && <ListFooter onClick={fetchMore}>see more</ListFooter>}
					</List>
				</div>
			</div>
		)
	);
};

export default TopicLeaderboard;
