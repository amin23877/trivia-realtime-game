import React from "react";
import s from "common/components/empties/Empties.module.scss";
import emptyLeaderboard from "assets/images/pics/empty-leaderboard.svg";

const EmptyLeaderboard = () => {
	return (
		<div className={s.container}>
			<div className={s.leaderboard}>
				<img src={emptyLeaderboard} alt="" />
			</div>

			<p className="text-center mt-1">Enter your name in the leaderboard of this topic by playing on it</p>
		</div>
	);
};

export default EmptyLeaderboard;
