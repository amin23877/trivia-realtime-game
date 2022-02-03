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

const LeaderboardTabPanelBody = () => {
	const mockLeaders = MOCK_LEADERS;

	return (
		<div className="w-100 h-100 tabPanelBody">
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
export default LeaderboardTabPanelBody;
