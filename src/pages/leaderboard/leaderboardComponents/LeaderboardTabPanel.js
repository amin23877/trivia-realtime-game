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

const LeaderboardTabPanel = (props) => {
	const mockLeaders = MOCK_LEADERS;

	return (
		<div className="w-100 h-100 tabPanel">
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
			<div className="results">
				{mockLeaders.map((el, index) => (
					<div key={index} className="d-flex align-items-center _br-bottom user">
						<span className="index">{`${index + 2}.`}</span>
						<div className="avatar"></div>
						<p className="username">{el.username}</p>
						<p className="points">{`${el.points} points`}</p>
					</div>
				))}

				<p className="seemore">See more</p>
			</div>
		</div>
	);
};
export default LeaderboardTabPanel;
