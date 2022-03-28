import React from "react";
import CountDownTimer from "common/components/countdownTimer/CountDownTimer";
import Text from "common/components/UI/text/Text";

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

					<Text as="span" ns={ns} className={s.text} />
				</div>
			)}
		/>
	);
};

export default CountDownTimerNormal;
