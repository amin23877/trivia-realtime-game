import React from "react";

import "./CountdownTimer.scss";
import iconBomb from "assets/images/icons/icon-bomb.svg";

const CountDownTimerGrand = (props) => {
	const { hours, minutes, seconds } = props;
	const rt = {
		h: hours < 10 ? `0${hours}` : `${hours}`,
		m: minutes < 10 ? `0${minutes}` : `${minutes}`,
		s: seconds < 10 ? `0${seconds}` : `${seconds}`,
	};

	return (
		<div className="d-flex countDownTimerGrand">
			<img className="icon-bomb" src={iconBomb} />
			<p className="box">{rt.h.substring(0, 1)}</p>
			<p className="box">{rt.h.substring(1, 2)}</p>
			<p className="colon">{":"}</p>
			<p className="box">{rt.m.substring(0, 1)}</p>
			<p className="box">{rt.m.substring(1, 2)}</p>
			<p className="colon">{":"}</p>
			<p className="box">{rt.s.substring(0, 1)}</p>
			<p className="box">{rt.s.substring(1, 2)}</p>
		</div>
	);
};

export default CountDownTimerGrand;
