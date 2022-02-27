import React from "react";
import Avatar from "common/components/UI/Avatar";
import RewardCard from "pages/menuPages/rewards/rewardsComponents/RewardCard";

import { useNavigate } from "react-router-dom";

import s from "./Rewards.module.scss";

//images
import { ReactComponent as ReceivedIcon } from "assets/images/icons/Circle_Check.svg";
import { ReactComponent as InProgressIcon } from "assets/images/icons/Arrow_Reload_02.svg";
import afghanWirelessLogo from "assets/images/logo/afghan-wireless-logo.png";
import backIcon from "assets/images/icons/arrow-back-friend-profile.svg";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "common/values/CORE";

/*
 * 	fake transaction
 * */
const rewards = [
	{
		type: "in-process",
		desc: "4th place in the Grand league",
		date: "Wednesday, December 22, 2021",
		gift: "2 GB weekly internet",
		timeRemain: 7,
	},
	{
		type: "receive",
		desc: "First place in the monthly league",
		date: "Wednesday, December 22, 2021",
		gift: "5 GB monthly internet",
	},
	{
		type: "received",
		desc: "Third place in the monthly league",
		date: "Wednesday, December 22, 2021",
		gift: "500 MB monthly internet",
	},
	{
		type: "in-process",
		desc: "4th place in the Grand league",
		date: "Wednesday, December 22, 2021",
		gift: "2 GB weekly internet",
		timeRemain: 7,
	},
];

const RewardMobileHeader = () => {
	const user = useSelector((state) => state.stateUser.userInfo);

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};
	console.log(user);
	return (
		<div className={s.mobileHeader}>
			<div className="d-flex align-items-center">
				<img onClick={handleGoBack} alt="logo" src={backIcon} className="me-3" />
				<img alt="logo" src={afghanWirelessLogo} />
				<p>Rewards</p>
			</div>

			<div className="d-flex gap-2">
				<div>
					<div className={s.username}>{user.username}</div>
					<div className={s.phone}>{user.phone}</div>
				</div>

				<Avatar src={IMAGE_URL + encodeURI(user.avatar)} size={34} />
			</div>
		</div>
	);
};

const RewardsDetails = () => {
	return (
		<div className={s.details}>
			<div className={s.totalRewards}>
				<img className={`${s.logo} d-none d-xl-inline`} alt="logo" src={afghanWirelessLogo} />

				<span className={s.line} />

				<p>All Gift Vouchers: 26</p>
			</div>

			<div className={s.detailsRightSide}>
				<div className={s.received}>
					<div className="d-flex flex-column align-items-center">
						<ReceivedIcon />
						Received
					</div>

					<span className={s.receiveCircle}>24</span>
				</div>

				<div className={s.inProgress}>
					<div className="d-flex flex-column align-items-center">
						<InProgressIcon />
						In progress
					</div>

					<span className={s.progressCircle}>2</span>
				</div>
			</div>
		</div>
	);
};

const Rewards = () => {
	return (
		<div className={s.rewardsContainer}>
			<RewardMobileHeader />

			<RewardsDetails />

			<p className={s.title}>Rewards:</p>

			<ul className={s.rewardsList}>
				{rewards.map((reward, index) => (
					<RewardCard key={index} data={reward} />
				))}
			</ul>
		</div>
	);
};
export default Rewards;
