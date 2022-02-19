import React from "react";
import Avatar from "common/components/UI/Avatar";
import { IMAGE_URL } from "common/values/CORE";

import "./LeaderboardList.scss";

export const LeaderboardListItem = ({ index, avatar, username, point }) => {
	return (
		<div className="leaderboard-list-item">
			<span className="leaderboard-list-item__index">{index}.</span>

			<Avatar
				className="leaderboard-list-item__avatar"
				size={{ mobile: 22, desktop: 44 }}
				src={`${IMAGE_URL}${encodeURI(avatar)}`}
			/>

			<p className="leaderboard-list-item__username">{username}</p>

			<p className="leaderboard-list-item__point">{point} points</p>
		</div>
	);
};

export const LeaderboardList = ({ children }) => {
	return (
		<div className="leaderboard-list">
			<div className="leaderboard-list__body">{children}</div>

			<div className="leaderboard-list__footer">
				<p>See more</p>
			</div>
		</div>
	);
};
