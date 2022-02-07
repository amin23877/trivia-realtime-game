// Reacts
import React from "react";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
import Avatar from "common/components/UI/Avatar";

// Redux
import { useSelector } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import bestPlayersLevel from "assets/images/pics/best-players-stage.svg";

const LeaderboardTabPanelHeader = ({ dataLeaderboard }) => {
	const stateGeneral = useSelector((state) => state.stateGeneral);

	return (
		<div className="w-100 h-100 tabPanelHeader">
			{stateGeneral.typeLeaderboardComponent !== TYPE_LEADERBOARD_COMPONENT.GENERAL ? (
				<>
					<div className="best">
						<div className="d-flex best-users">
							{_.slice(dataLeaderboard, 0, 3).map((el, index) => (
								<div key={index} className={`user ${index === 1 ? "best-user" : ""}`}>
									{!_.isEmpty(el) ? (
										stateGeneral.typeLeaderboardComponent ===
										TYPE_LEADERBOARD_COMPONENT.INNER_LEAGUE ? (
											<>
												<Avatar
													className="leaderboard-avatar"
													size={{ mobile: 32, desktop: 54 }}
													src={`${IMAGE_URL}${el?.UserId?.avatar}`}
												/>
												<p className="username">{el?.UserId?.username}</p>
												<p className="points">{`${el?.point} points`}</p>
												<p className="reward">{`$ ${el?.reward}`}</p>
											</>
										) : (
											<>
												<Avatar
													className="leaderboard-avatar"
													size={{ mobile: 32, desktop: 54 }}
													src={`${IMAGE_URL}${el?.UserId?.avatar}`}
												/>
												<p className="username">{el?.UserId?.username}</p>
												<p className="points">{`${el?.xp} points`}</p>
											</>
										)
									) : (
										<></>
									)}
								</div>
							))}
						</div>

						<div className="w-100 mt-3">
							<img width="100%" alt="" src={bestPlayersLevel} />
						</div>
					</div>
				</>
			) : (
				<>
					<div className="d-flex align-items-center _br-bottom user-first">
						<div className="d-flex align-items-center info">
							<span className="index">{"1."}</span>
							<div className="avatar"></div>
							<div>
								<p className="username">{dataLeaderboard[0].UserId?.username}</p>
								<p className="points">{`${dataLeaderboard[0]?.xp} points`}</p>
							</div>
						</div>
						<div className="d-flex align-items-center bundle">
							<img src={`${IMAGE_URL}${dataLeaderboard[0]?.UserId?.avatar}`} />1 GB Data bundle
						</div>
					</div>
					<p className="subtitle">Your position: 12</p>
				</>
			)}
		</div>
	);
};
export default LeaderboardTabPanelHeader;
