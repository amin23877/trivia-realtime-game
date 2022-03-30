import React, { useState } from "react";
import _ from "lodash";
import Tabs from "common/components/UI/tabs/Tabs";
import BestPlayers from "common/components/bestPlayers/BestPlayers";
import { List, ListFooter, ListHeader, ListItem } from "common/components/UI/list/List";
import { useListLoad } from "common/hooks/useListLoad";

import s from "../InnerTopic.module.scss";
import EmptyLeaderboard from "common/components/empties/EmptyLeaderboard";
import Text from "common/components/UI/text/Text";
import { useRequest } from "common/hooks/useRequest";

const tabs = [
	{ label: "filterTabs.all", value: "all" },
	{ label: "filterTabs.daily", value: "day" },
	{ label: "filterTabs.weekly", value: "week" },
	{ label: "filterTabs.monthly", value: "month" },
];

const TopicLeaderboard = ({ id }) => {
	const [timespan, setTimespan] = useState("all");

	const { data, success, endOfList, fetchMore } = useListLoad(`topicleaderboard/${id}/${timespan}`, 10);

	const { response, success: getMyPosSuccess } = useRequest(`topicleaderboard/${id}/${timespan}/me`);

	const handleTimespan = (event, newValue) => {
		setTimespan(newValue);
	};

	return (
		success && (
			<div className="mt-4">
				<Tabs value={timespan} onChange={handleTimespan} tabs={tabs} />

				<p className={s.yourPosition}>
					<Text as="span" ns="your-pos" /> :{" "}
					<span className={s.position}>{getMyPosSuccess && response.place}</span>
				</p>

				{data.length === 0 ? (
					<EmptyLeaderboard />
				) : (
					<div className="_leaderboardContainer">
						<BestPlayers
							className="mt-5"
							theBest={_.slice(data, 0, 3)}
							renderAchievements={(data) => (
								<span className={s.bestPlayersScore}>
									{data.score}
									<Text as="span" ns="score" />
								</span>
							)}
						/>

						{data.length > 3 && (
							<List className="mt-3 mt-xl-4">
								<ListHeader>
									<Text ns="score" className={s.scoreText} />
								</ListHeader>

								{_.slice(data, 3, data.length).map((player, index) => (
									<ListItem
										key={index}
										index={index + 4}
										userId={player.UserId._id}
										username={player.UserId.username || player.username}
										avatar={player.UserId.avatar || player.avatar}
									>
										<p className={s.scoreNumber}>{player.score}</p>
									</ListItem>
								))}

								{!endOfList && <ListFooter onClick={fetchMore}>see more</ListFooter>}
							</List>
						)}
					</div>
				)}
			</div>
		)
	);
};

export default TopicLeaderboard;
