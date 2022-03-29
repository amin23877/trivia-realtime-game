import React from "react";
import CountDownTimer from "common/components/countdownTimer/CountDownTimer";

import s from "./CountDownTimer.module.scss";

const CountDownTimerGrand = ({ timerProps }) => {
	return (
		<>
			<span className={s.textWhite}>to start</span>
			<CountDownTimer
				className={s.grandContainer}
				timerProps={timerProps}
				showTimeIcon
				renderTime={(name, value) => (
					<div>
						<p>{value}</p>
					</div>
				)}
			/>
		</>
	);
};

export default CountDownTimerGrand;
