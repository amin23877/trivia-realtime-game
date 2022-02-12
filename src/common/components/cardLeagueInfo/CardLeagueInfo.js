// Reacts
import React, { useEffect, useState } from "react";
import CountdownTimer from "common/components/countdownTimer/CountDownTimer";
import CountDownTimerGrand from "common/components/countdownTimer/CountDownTimerGrand";
import CountDownTimerHistory from "common/components/countdownTimer/CountDownTimerHistory";

// Styles, Icons, Images
import "./CardLeagueInfo.scss";
import PersonIcon from "@material-ui/icons/Person";
import imgExpired from "assets/images/icons/expired.svg";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// #countdownTimer step2
import Countdown from "react-countdown";
import { IMAGE_URL } from "common/values/CORE";
import { useNavigate } from "react-router-dom";
import { TYPE_LEAGUE_HOME } from "common/values/TYPES";

const CardLeagueInfo = ({ info, hasEnterBtn = true, type = TYPE_LEAGUE_HOME.GENERAL }) => {
	const navigate = useNavigate();

	const expired = !!type?.includes(TYPE_LEAGUE_HOME.HISTORY);
	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	// console.log(info);
	// const timeRemain = localStorage.getItem('remainingTime');
	// #countdownTimer step4
	const handleStop = (e) => {
		// console.log(e);
	};

	var date = new Date(info?.endTime);

	const [rewards, setRewards] = useState(0);
	const handleSetRewards = (rewards) => {
		let rewardsSum = 0;
		rewards?.forEach((el) => {
			rewardsSum += el.place ? el?.reward : (el?.endPlace - el?.startPlace + 1) * el?.reward;
		});
		setRewards(rewardsSum);
	};

	const styleBgImg = {
		backgroundImage: `url(${IMAGE_URL}${encodeURI(info?.logo)})`,
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			handleSetRewards(info?.rewards);
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className={`w-100 h-100 d-flex cardLeagueInfo ${expired ? "expired" : ""}`} style={styleBgImg}>
			{expired && (
				<div className="expired-empty">
					<img className="img-expired" src={imgExpired} alt="" />
				</div>
			)}

			{!expired && hasEnterBtn && (
				<button className="btn-enter" onClick={(e) => handleNavigate(e, `/leagues/${info?._id}`)}>
					Enter <ArrowForwardIosIcon className="icon" />
				</button>
			)}

			<div className="d-flex flex-column justify-content-between  w-100 cardLeagueInfo-info">
				<div className="d-flex justify-content-start align-items-center">
					<div className={`bullet ${expired ? "bullet-red" : ""}`} />
					<p className="title"> {info?.name}</p>
					{/* <p className="title"> {_.truncate(info?.name, { length: 25, separator: " " })}</p> */}
				</div>

				{type?.includes(TYPE_LEAGUE_HOME.GRAND) ? (
					<div className="timer">
						<p className="tostart ">to start</p>
						<Countdown
							date={info?.endTime}
							renderer={CountDownTimerGrand}
							onComplete={(e) => handleStop(e)}
						/>
					</div>
				) : expired ? (
					<div className="timer">
						<Countdown
							date={info?.endTime}
							renderer={CountDownTimerHistory}
							onComplete={(e) => handleStop(e)}
						/>
					</div>
				) : (
					<div className="d-flex timer">
						{/* #countdownTimer step3 */}
						<Countdown
							// date={Date.now() + timeRemain * 1000}
							date={info?.endTime}
							renderer={CountdownTimer}
							onComplete={(e) => handleStop(e)}
						/>
					</div>
				)}

				<p className="price">{`$${rewards}`}</p>

				{!expired ? (
					<div className="d-flex justify-content-start align-items-center players">
						{info?.players > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
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
