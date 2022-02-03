// Reacts
import React from "react";
// Hooks
// Packages
// Components, Services, Functions
import { MOCK_LEADERS } from "common/mocks/MOCK";
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import iconBundle from "assets/images/icons/icon-bundle.svg";
import { useSelector } from "react-redux";

const LeaderboardTabPanelHeader = () => {
	const stateGeneral = useSelector((state) => state.stateGeneral);

	console.log(stateGeneral.typeLeaderboardComponent);

	const mockLeaders = MOCK_LEADERS;

	return (
		<div className="w-100 h-100 tabPanelHeader">
			<div className="">
				<div className="d-flex align-items-center _br-bottom user-first">
					<div className="d-flex align-items-center info">
						<span className="index">{"1."}</span>
						<div className="avatar"></div>
						<div>
							<p className="username">{mockLeaders[0].username}</p>
							<p className="points">{`${mockLeaders[0].points} points`}</p>
						</div>
					</div>
					<div className="d-flex align-items-center bundle">
						<img src={iconBundle} />1 GB Data bundle
					</div>
				</div>
			</div>

			<p className="subtitle">Your position: 12</p>
		</div>
	);
};
export default LeaderboardTabPanelHeader;
