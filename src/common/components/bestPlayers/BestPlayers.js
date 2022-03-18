import React from "react";
import CardUser from "common/components/cardUser/CardUser";

import s from "./BestPlayers.module.scss";

// images
import bestPlayersLevel from "assets/images/pics/best-players-stage.svg";
import secondPlaceImage from "assets/images/pics/second-place.svg";
import thirdPlaceImage from "assets/images/pics/third-place.svg";

const BestPlayerInfo = ({ info, renderAchievements }) => {
	return (
		<CardUser
			key={info._id}
			id={info?.UserId?._id}
			avatar={info?.UserId?.avatar}
			avatarSize={{ mobile: 32, desktop: 54 }}
			username={info?.UserId?.username}
			info={renderAchievements(info)}
			classes={{
				content: "",
				info: "d-flex flex-column flex-xl-row align-items-center justify-content-center gap-2",
				username: s.username,
				container: "d-flex flex-column align-items-center",
			}}
		/>
	);
};

const BestPlayers = ({ theBest = [], renderAchievements, className }) => {
	if (!theBest || theBest.length === 0) return null;

	return (
		<>
			<div className={`${s.bestPlayers} ${className}`}>
				{/* second place */}
				<div className={s.player}>
					{theBest[1] ? (
						<BestPlayerInfo info={theBest[1]} renderAchievements={renderAchievements} />
					) : (
						<img className={s.image} src={secondPlaceImage} alt="second-place" />
					)}
				</div>

				{/* first place */}
				<div className={`${s.player} ${s.best}`}>
					<BestPlayerInfo info={theBest[0]} renderAchievements={renderAchievements} />
				</div>

				{/* third place */}
				<div className={s.player}>
					{theBest[2] ? (
						<BestPlayerInfo info={theBest[2]} renderAchievements={renderAchievements} />
					) : (
						<img className={s.image} src={thirdPlaceImage} alt="third-place" />
					)}
				</div>
			</div>

			<div className="w-100 mt-1">
				<img width="100%" alt="" src={bestPlayersLevel} />
			</div>
		</>
	);
};

export default BestPlayers;
