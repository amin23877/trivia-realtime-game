// Reacts
import React from "react";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import EmptyList from "common/components/empties/EmptyList";
import { TYPE_LEADERBOARD_COMPONENT } from "common/values/TYPES";
// Redux
import { useSelector } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";

const LeaderboardTabPanelBody = ({ dataLeaderboard }) => {
	const stateGeneral = useSelector((state) => state.stateGeneral);

	const indexStart = stateGeneral.typeLeaderboardComponent !== TYPE_LEADERBOARD_COMPONENT.GENERAL ? 4 : 2;

	return (
		<div className="w-100 h-100 tabPanelBody">
			{dataLeaderboard?.length > 0 ? (
				<>
					{dataLeaderboard?.length > 3 ? (
						<div className="results">
							{_.slice(dataLeaderboard, 3, dataLeaderboard?.length).map((el, index) => (
								<div key={index} className="d-flex align-items-center _br-bottom user">
									<span className="index">{`${index + indexStart}.`}</span>
									<img className="avatar" src={`${IMAGE_URL}${el?.UserId?.avatar}`} alt="" />
									<p className="username">{el?.UserId?.username}</p>
									<p className="points">{`${el?.xp} points`}</p>
								</div>
							))}
							<p className="seemore">See more</p>
						</div>
					) : (
						<></>
					)}
				</>
			) : (
				<EmptyList />
			)}
		</div>
	);
};
export default LeaderboardTabPanelBody;
