import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountDownTimerGrand from "common/components/countdownTimer/CountDownTimerGrand";
import CountDownTimerNormal from "common/components/countdownTimer/CountDownTimerNormal";
import Countdown from "react-countdown";
import { IMAGE_URL } from "common/values/CORE";

// Styles, Icons, Images
import "./CardLeagueInfo.scss";
import imgExpired from "assets/images/icons/expired.svg";

function calcLeagueType(start, end) {
	const now = Date.now();

	if (now >= end) {
		return "expired";
	} else if (now >= start) {
		return "started";
	} else {
		return "not-started";
	}
}

const CardLeagueInfo = ({ info }) => {
	const date = new Date(info.endTime);

	const [type, setType] = useState(calcLeagueType(info.startTime, info.endTime));
	const [rewards, setRewards] = useState(0);

	const navigate = useNavigate();

	const handleStop = () => setType("expired");

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

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
		handleSetRewards(info?.rewards);
	}, [info]);

	return (
		<div className={`w-100 h-100 d-flex cardLeagueInfo ${type === "expired" ? "expired" : ""}`} style={styleBgImg}>
			{type === "expired" && <img className="img-expired" src={imgExpired} alt="" />}

			{type === "started" && (
				<button className="btn-enter" onClick={(e) => handleNavigate(e, `/leagues/${info?._id}`)}>
					Enter <div className="btn-enter-icon" />
				</button>
			)}

			<div className="w-100 cardLeagueInfo-info">
				<div className="d-flex justify-content-start align-items-center">
					<div className={`bullet ${type === "expired" ? "bullet-red" : ""}`} />
					<p className="title"> {info?.name}</p>
				</div>

				{type === "not-started" ? (
					<div className="card-league-timer">
						<p className="to-start ">to start</p>
						<Countdown
							date={info?.endTime}
							renderer={(props) => <CountDownTimerGrand timerProps={props} />}
							onComplete={handleStop}
						/>
					</div>
				) : type === "expired" ? (
					<div className="card-league-timer">
						<Countdown
							date={info?.endTime}
							renderer={(props) => <CountDownTimerNormal color="gray" timerProps={props} />}
							onComplete={handleStop}
						/>
					</div>
				) : (
					<div className="d-flex card-league-timer">
						<Countdown
							date={info?.endTime}
							renderer={(props) => <CountDownTimerNormal timerProps={props} />}
							onComplete={handleStop}
						/>
					</div>
				)}

				<p className="price">{`${rewards} AFN`}</p>

				{type === "expired" && <p className="date">{date.toDateString()}</p>}
			</div>
		</div>
	);
};

export default CardLeagueInfo;
