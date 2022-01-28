// #countdownTimer step1
import React from "react";

import "./CountdownTimer.scss";

const CountDownTimerSecond = ({ minutes, seconds }) => {
	const rt = {
		m: minutes < 10 ? `0${minutes}` : `${minutes}`,
		s: seconds < 10 ? `0${seconds}` : `${seconds}`,
	};

	return (
		<div className="d-flex countdownTimerSecond">
			<p>{rt.m.substring(0, 1)}</p>
			<p>{rt.m.substring(1, 2)}</p>
			<p>{":"}</p>
			<p>{rt.s.substring(0, 1)}</p>
			<p>{rt.s.substring(1, 2)}</p>
		</div>
	);
};

export default CountDownTimerSecond;
