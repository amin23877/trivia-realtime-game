import React from "react";
import Avatar from "common/components/UI/Avatar";
import RewardCard from "pages/menuPages/rewards/rewardsComponents/RewardCard";

import { useNavigate } from "react-router-dom";

import s from "./Rewards.module.scss";

//images
import { ReactComponent as ReceivedIcon } from "assets/images/icons/Circle_Check.svg";
import { ReactComponent as InProgressIcon } from "assets/images/icons/Arrow_Reload_02.svg";
import profilePic from "assets/images/test/profile-pic-2.jpg";
import afghanWirelessLogo from "assets/images/logo/afghan-wireless-logo.png";
import backIcon from "assets/images/icons/arrow-back-friend-profile.svg";

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
];

const RewardMobileHeader = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className={s.mobileHeader}>
			<div className="d-flex align-items-center">
				<img onClick={handleGoBack} alt="logo" src={backIcon} className="me-3" />
				<img alt="logo" src={afghanWirelessLogo} />
				<p>Rewards</p>
			</div>

			<div className="d-flex gap-2">
				<div>
					<div className={s.username}>sarah milani</div>
					<div className={s.phone}>+93 700 502257</div>
				</div>

				<Avatar src={profilePic} size={34} />
			</div>
		</div>
	);
};

const RewardsDetails = () => {
	return (
		<div className={s.details}>
			<div className={s.totalRewards}>
				<img width={36} height={36} className="d-none d-xl-inline" alt="logo" src={afghanWirelessLogo} />

				<p>All Gift Vouchers:</p>

				<span className={s.line} />

				<p className="wallet-balance__amount">26</p>
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
