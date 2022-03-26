import React from "react";
import CardUser from "common/components/cardUser/CardUser";
import Text from "common/components/UI/text/Text";

// Styles, Icons, Images
import "./LeaderboardTabPanel.scss";
import iconGift from "assets/images/icons/icon-gift.svg";
import runnerImage from "assets/images/pics/runner.svg";

const LeaderboardTabPanelHeader = ({ numberOne, myPosition }) => {
	return (
		<div className="w-100 h-100 tabPanelHeader">
			<div className="d-flex align-items-center user-first">
				<div className="d-flex align-items-center info">
					<span className="index">{"1."}</span>

					{numberOne ? (
						<CardUser
							id={numberOne.UserId._id}
							username={numberOne.UserId.username}
							avatar={numberOne.UserId.avatar}
							info={
								<p className="points">
									{numberOne.score} <Text as="span" ns="score" />
								</p>
							}
							avatarSize={{ mobile: 34, desktop: 56 }}
						/>
					) : (
						<div className="empty-number-one">
							<Text ns="leaderboard.be-first" />
							<img src={runnerImage} alt="runner" />
						</div>
					)}
				</div>

				<div className="d-flex align-items-center bundle">
					<img alt="" className="icon-gift" src={iconGift} />1 GB Data bundle
				</div>
			</div>

			<p className="subtitle">
				<Text as="span" ns="your-pos" /> : {myPosition?.place ?? 0}
			</p>
		</div>
	);
};
export default LeaderboardTabPanelHeader;
