// Reacts
import React from "react";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
// Redux
import { useSelector } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

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
										<>
											<img className="avatar" src={`${IMAGE_URL}${el?.UserId?.avatar}`} alt="" />
											<p className="username">{el?.UserId?.username}</p>
											<p className="points">{`${el?.xp} points`}</p>
										</>
									) : (
										<></>
									)}
								</div>
							))}
						</div>

						<div className="d-flex align-items-center levels">
							<div className="level level-2">2</div>
							<div className="level level-1">1</div>
							<div className="level level-3">3</div>
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
