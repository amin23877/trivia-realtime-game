import React from "react";
import CardUser from "common/components/cardUser/CardUser";

import s from "./BestPlayers.module.scss";

// images
import bestPlayersLevel from "assets/images/pics/best-players-stage.svg";

const BestPlayers = ({ theBest = [], className }) => {
	return (
		<>
			<div className={s.bestPlayers + " " + className}>
				{theBest.map((el, index) => (
					<CardUser
						key={el._id}
						id={el?.UserId?._id}
						avatar={el?.UserId?.avatar}
						avatarSize={{ mobile: 32, desktop: 54 }}
						username={el?.UserId?.username}
						classes={{
							container: `${s.player} ${index === 0 ? s.best : ""} ${index === 1 ? s.secondPlace : ""}`,
							content: "",
							info: "d-flex flex-column flex-xl-row align-items-center justify-content-center gap-2",
							username: s.username,
						}}
						info={
							<>
								<span className={s.scores}>{`${el?.score ?? el?.xp} score`}</span>

								{el?.reward && <span className={s.rewards}>{el?.reward} AFN</span>}
							</>
						}
					/>
				))}
			</div>

			<div className="w-100 mt-1">
				<img width="100%" alt="" src={bestPlayersLevel} />
			</div>
		</>
	);
};

export default BestPlayers;
