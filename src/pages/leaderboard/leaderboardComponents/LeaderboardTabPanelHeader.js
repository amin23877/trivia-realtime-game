import React from "react";

// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
import Avatar from "common/components/UI/Avatar";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import iconGift from "assets/images/icons/icon-gift.svg";

const LeaderboardTabPanelHeader = ({ dataLeaderboard }) => {
	return (
		<div className="w-100 h-100 tabPanelHeader">
			<div className="d-flex align-items-center user-first">
				<div className="d-flex align-items-center info">
					<span className="index">{"1."}</span>

					<Avatar
						size={{ mobile: 34, desktop: 56 }}
						src={`${IMAGE_URL}${encodeURI(dataLeaderboard[0]?.avatar)}`}
					/>

					<div>
						<p className="username">{dataLeaderboard[0]?.username}</p>

						<p className="points">{`${dataLeaderboard[0]?.xp} points`}</p>
					</div>
				</div>

				<div className="d-flex align-items-center bundle">
					<img alt="" className="icon-gift" src={iconGift} />1 GB Data bundle
				</div>
			</div>

			<p className="subtitle">Your position: 12</p>
		</div>
	);
};
export default LeaderboardTabPanelHeader;
