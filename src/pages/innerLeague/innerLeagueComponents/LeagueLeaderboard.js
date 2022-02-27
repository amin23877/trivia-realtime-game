import React from "react";
import _ from "lodash";
import { useListLoad } from "common/hooks/useListLoad";
import BestPlayers from "common/components/bestPlayers/BestPlayers";
import { List, ListFooter, ListHeader, ListItem } from "common/components/UI/list/List";

import s from "../LeaguesInner.module.scss";

const LeagueLeaderboard = ({ id }) => {
	const { response, success, endOfList, fetchMore } = useListLoad(`league/leaderboard/${id}`, 10);

	return (
		success && (
			<div className="_leaderboardContainer mt-4">
				<BestPlayers theBest={_.slice(response, 0, 3)} />

				<List className="mt-4">
					<ListHeader>
						<p className={s.reward}>Reward</p>
						<p className={s.point}>Point</p>
						<p className={s.score}>Score</p>
					</ListHeader>

					{_.slice(response, 3, response.length).map((player = {}, index) => {
						const { UserId, point, score, reward } = player;

						return (
							<ListItem key={index} index={index + 4} username={UserId.username} avatar={UserId.avatar}>
								<div className="d-flex">
									<p className={s.reward}>{reward} ‌ ‌ ‌ AFN</p>
									<p className={s.point}>{point}</p>
									<p className={s.score}>{score}</p>
								</div>
							</ListItem>
						);
					})}

					{!endOfList && <ListFooter onClick={fetchMore}>See more</ListFooter>}
				</List>
			</div>
		)
	);
};

export default LeagueLeaderboard;
