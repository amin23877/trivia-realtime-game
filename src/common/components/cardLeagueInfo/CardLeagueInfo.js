// Reacts
import React, { useEffect, useState } from "react";
// Hooks
// Packages
import _ from "lodash";
// Components, Services, Functions
// Redux
// Material - lab
// Styles, Icons, Images
import "./CardLeagueInfo.scss";
import PersonIcon from "@material-ui/icons/Person";
import imgExpired from "assets/images/icons/expired.svg";
import imgMain from "assets/images/pics/home-card-main.svg";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

// #countdownTimer step2
import Countdown from "react-countdown";
import CountdownTimer from "../CountdownTimer/CountDownTimer";
import { IMAGE_URL } from "common/values/CORE";

const CardLeagueInfo = ({ info, expired = false }) => {
	// const timeRemain = localStorage.getItem('remainingTime');
	// #countdownTimer step4
	const timeRemain = info.endTime - Date.now();
	const handleStop = (e) => {
		// console.log(e);
	};

	var date = new Date(info.endTime);

	const [rewards, setRewards] = useState(0);
	const handleSetRewards = (rewards) => {
		let rewardsSum = 0;
		rewards.forEach((el) => {
			rewardsSum += el.place ? el.place : (el?.endPlace - el?.startPlace + 1) * el?.reward;
		});
		setRewards(rewardsSum);
	};

	const styleBgImg = {
		// backgroundImage: `url(${IMAGE_URL}${info?.logo})`,
		backgroundImage: `url(../../../assets/images/test/2.png)`,
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			handleSetRewards(info.rewards);
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className={`w-100 h-100 d-flex cardLeagueInfo ${expired ? "expired" : ""}`} style={styleBgImg}>
			{expired ? (
				<div className="expired-empty">
					<img className="img-expired" src={imgExpired} alt="" />
				</div>
			) : null}
			<div className="d-flex flex-column justify-content-between  w-100 cardLeagueInfo-info">
				<div className="d-flex justify-content-start align-items-center">
					<div className={`bullet ${expired ? "bullet-red" : ""}`}></div>
					<p className="title"> {_.truncate(info?.name, { length: 25, separator: " " })}</p>
				</div>

				<div className="d-flex timer">
					{/* #countdownTimer step3 */}
					<Countdown
						// date={Date.now() + timeRemain * 1000}
						date={info.endTime}
						renderer={CountdownTimer}
						onComplete={(e) => handleStop(e)}
					/>
				</div>
				<p className="price">{`$${rewards}`}</p>

				{!expired ? (
					<div className="d-flex justify-content-start align-items-center players">
						{info.players > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
						<p>{`${info?.players} player`}</p>
					</div>
				) : (
					// <p className="date">{date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</p>
					<p className="date">{date.toDateString()}</p>
				)}
			</div>
			{/* <img className="card-logo" src={`${IMAGE_URL}${info?.logo}`} alt="" /> */}
			{/* <img src={info.img} alt='' /> */}
		</div>
	);
};
export default CardLeagueInfo;
