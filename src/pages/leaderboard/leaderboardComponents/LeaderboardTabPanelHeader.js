import React from "react";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import iconGift from "assets/images/icons/icon-gift.svg";
import CardUser from "common/components/cardUser/CardUser";

const LeaderboardTabPanelHeader = ({ numberOne, myPosition }) => {
	return (
		<div className="w-100 h-100 tabPanelHeader">
			<div className="d-flex align-items-center user-first">
				<div className="d-flex align-items-center info">
					<span className="index">{"1."}</span>

					<CardUser
						id={numberOne.UserId._id}
						username={numberOne.UserId.username}
						avatar={numberOne.UserId.avatar}
						info={<p className="points">{numberOne.score} score</p>}
						avatarSize={{ mobile: 34, desktop: 56 }}
					/>
				</div>

				<div className="d-flex align-items-center bundle">
					<img alt="" className="icon-gift" src={iconGift} />1 GB Data bundle
				</div>
			</div>

			<p className="subtitle">Your position: {myPosition && myPosition.place}</p>
		</div>
	);
};
export default LeaderboardTabPanelHeader;
