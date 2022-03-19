import React from "react";
import CountDownTimer from "common/components/countdownTimer/CountDownTimer";

import s from "common/components/countdownTimer/CountDownTimer.module.scss";

const CountDownTimerNormal = ({ color = "secondary", timerProps }) => {
	return (
		<CountDownTimer
			className={s.normalContainer}
			timerProps={timerProps}
			separator="line"
			renderTime={(name, value) => (
				<div className={s.boxContainer}>
					<p className={s["box-" + color]}>{value}</p>

					<span className={s.text}>{name}</span>
				</div>
			)}
		/>
	);
};

export default CountDownTimerNormal;
