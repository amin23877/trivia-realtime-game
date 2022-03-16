import React from "react";
import _ from "lodash";
import { useListLoad } from "common/hooks/useListLoad";
import { List, ListFooter, ListHeader, ListItem } from "common/components/UI/list/List";

import s from "../LeaguesInner.module.scss";
import BestPlayers from "common/components/bestPlayers/BestPlayers";

const PAGE_SIZE = 10;

const LeagueLeaderboard = ({ id, isOnePlayerLeague }) => {
	const { response, success, endOfList, fetchMore } = useListLoad(`league/leaderboard/${id}`, PAGE_SIZE);

	return (
		success && (
			<div className="_leaderboardContainer mt-4">
				<BestPlayers
					theBest={_.slice(response.result, 0, 3)}
					renderAchievements={(data) =>
						isOnePlayerLeague ? (
							<>
								<span className={s.bestPlayersScores}>{`${data?.score ?? data?.xp} score`}</span>

								{data?.reward && <span className={s.bestPlayersRewards}>{data?.reward} AFN</span>}
							</>
						) : (
							<span className={s.bestPlayersPoint}>{`${data?.point ?? data?.xp} point`}</span>
						)
					}
				/>

				<List className="mt-4">
					{/* reward and score only shown in one-player league */}
					<ListHeader>
						{isOnePlayerLeague && <p className={s.reward}>Reward</p>}
						<p className={s.point}>Point</p>
						{isOnePlayerLeague && <p className={s.score}>Score</p>}
					</ListHeader>

					{_.slice(response.result, 3, response.result.length).map((player = {}, index) => {
						const { UserId, point, score, reward } = player;

						return (
							<ListItem
								userId={player.UserId._id}
								key={index}
								index={index + 4}
								username={UserId.username}
								avatar={UserId.avatar}
							>
								<div className="d-flex">
									{isOnePlayerLeague && <p className={s.reward}>{reward} ‌ ‌ ‌ AFN</p>}
									<p className={s.point}>{point}</p>
									{isOnePlayerLeague && <p className={s.score}>{score}</p>}
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
