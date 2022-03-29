import React, { Fragment } from "react";

import s from "./CountDownTimer.module.scss";
import iconBomb from "assets/images/icons/icon-bomb.svg";

const CountdownTimer = ({ className, timerProps, separator, showTimeIcon = false, renderTime }) => {
	const { hours, minutes, seconds, days } = timerProps;

	const rt = {
		days: days < 10 ? `0${days}` : `${days}`,
		hours: hours < 10 ? `0${hours}` : `${hours}`,
		minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
		seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
	};

	return (
		<div className={`${s.container} ${className ?? ""}`}>
			{showTimeIcon && <img className="me-2" src={iconBomb} alt="" />}

			{Object.entries(rt).map(([key, value], index) => (
				<Fragment key={index}>
					{renderTime(key, value)}

					{separator === "line" ? <p className={s.line} /> : <p className={s.colon}>:</p>}
				</Fragment>
			))}
		</div>
	);
};

export default CountdownTimer;
