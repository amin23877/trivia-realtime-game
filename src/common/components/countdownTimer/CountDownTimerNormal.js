import React from "react";
import CountDownTimer from "common/components/countdownTimer/CountDownTimer";

import s from "common/components/countdownTimer/CountDownTimer.module.scss";

const CountDownTimerNormal = ({ color = "secondary", timerProps }) => {
	return (
		<CountDownTimer
			className={s.normalContainer}
			timerProps={timerProps}
			separator="line"
			renderTime={(ns, value) => (
				<div className={s.boxContainer}>
					<p className={s["box-" + color]}>{value}</p>
				</div>
			)}
		/>
	);
};

export default CountDownTimerNormal;
