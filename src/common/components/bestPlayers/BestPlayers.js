import React from "react";
import Avatar from "common/components/UI/Avatar";

import s from "./BestPlayers.module.scss";

// images
import bestPlayersLevel from "assets/images/pics/best-players-stage.svg";
import { IMAGE_URL } from "common/values/CORE";

const BestPlayers = ({ theBest = [], className }) => {
	return (
		<>
			<div className={s.bestPlayers + " " + className}>
				{theBest.map((el, index) => (
					<div key={index} className={`${s.player} ${index === 1 ? s.best : ""}`}>
						<Avatar
							className={s.avatar}
							size={{ mobile: 32, desktop: 54 }}
							src={`${IMAGE_URL}${encodeURI(el?.UserId?.avatar)}`}
						/>

						<p className={s.username}>{el?.UserId?.username}</p>

						<div className="d-flex flex-column flex-xl-row align-items-center justify-content-center">
							<p className={s.points}>{`${el?.point ?? el?.xp} points`}</p>

							{el?.reward && <p className={s.rewards}>$ {el?.reward}</p>}
						</div>
					</div>
				))}
			</div>

			<div className="w-100 mt-1">
				<img width="100%" alt="" src={bestPlayersLevel} />
			</div>
		</>
	);
};

export default BestPlayers;
