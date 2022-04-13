import React from "react";
import _ from "lodash";
import { useListLoad } from "common/hooks/useListLoad";
import { List, ListFooter, ListHeader, ListItem } from "common/components/UI/list/List";

import s from "../LeaguesInner.module.scss";
import BestPlayers from "common/components/bestPlayers/BestPlayers";
import EmptyLeaderboard from "common/components/empties/EmptyLeaderboard";
import Text from "common/components/UI/text/Text";

const PAGE_SIZE = 10;

const LeagueLeaderboard = ({ id, isOnePlayerLeague }) => {
	const { data, success, endOfList, fetchMore } = useListLoad(`league/leaderboard/${id}`, PAGE_SIZE);

	if (!success) return null;

	if (data && data.length === 0) return <EmptyLeaderboard />;

	return (
		<div className="_leaderboardContainer mt-4">
			<BestPlayers
				theBest={_.slice(data, 0, 3)}
				renderAchievements={(data) =>
					isOnePlayerLeague ? (
						<>
							<span className={s.bestPlayersScores}>
								{data?.score ?? data?.xp} <Text as="span" ns="score" />
							</span>

							{data?.reward && <span className={s.bestPlayersRewards}>{data?.reward} AFN</span>}
						</>
					) : (
						<span className={s.bestPlayersPoint}>
							{data?.point ?? data?.xp} <Text as="span" ns="point" />
						</span>
					)
				}
			/>

			{data.length > 3 && (
				<List className="mt-4">
					{/* reward and score only shown in one-player league */}
					<ListHeader>
						{isOnePlayerLeague && <Text ns="reward" className={s.reward} />}
						<Text ns="point" className={s.point} />
						{isOnePlayerLeague && <Text ns="score" className={s.score} />}
					</ListHeader>

					{_.slice(data, 3, data.length).map((player = {}, index) => {
						const { UserId, point, score, reward } = player;

						return (
							<ListItem
								userId={player?.UserId?._id}
								key={index}
								index={index + 4}
								username={UserId?.username}
								avatar={UserId?.avatar}
							>
								<div className="d-flex">
									{isOnePlayerLeague && <p className={s.reward}>{reward} AFN</p>}
									<p className={s.point}>{point}</p>
									{isOnePlayerLeague && <p className={s.score}>{score}</p>}
								</div>
							</ListItem>
						);
					})}

					{!endOfList && <ListFooter onClick={fetchMore}>See more</ListFooter>}
				</List>
			)}
		</div>
	);
};

export default LeagueLeaderboard;
