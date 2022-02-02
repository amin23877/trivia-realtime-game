import React from "react";

import "./Subscribe.scss";

// images
import calenderDaily from "assets/images/pics/calender-daily.svg";
import calenderWeekly from "assets/images/pics/calender-weekly.svg";
import calenderMonthly from "assets/images/pics/calender-weekly.svg";
import Logo from "common/components/UI/Logo";

const Subscribe = () => {
	return (
		<div className="subscribe">
			<Logo className="logo-space" />

			<p className="subscribe-desc">Select the subscription package you want</p>

			<form className="subscribe-form">
				<div className="subscribe-offer">
					<div className="subscribe-offer__duration">
						<img className="subscribe-offer__image" alt="offer" src={calenderDaily} />
						Daily
					</div>

					<label className="subscribe-offer__price">4 AFS</label>
					<input className="subscribe-offer__select" value="daily" name="offer" type="radio" />
				</div>

				<div className="subscribe-offer" data-discount="46%">
					<div className="subscribe-offer__duration">
						<img className="subscribe-offer__image" alt="offer" src={calenderWeekly} />
						Weekly
					</div>

					<label className="subscribe-offer__price">4 AFS</label>
					<input className="subscribe-offer__select" value="weekly" name="offer" type="radio" />
				</div>

				<div className="subscribe-offer" data-discount="75%">
					<div className="subscribe-offer__duration">
						<img className="subscribe-offer__image" alt="offer" src={calenderMonthly} />
						Monthly
					</div>

					<p className="subscribe-offer__price">4 AFS</p>
					<input className="subscribe-offer__select" value="monthly" name="offer" type="radio" />
				</div>

				<input className="subscribe-form__confirm" type="submit" value="Confirm" disabled={true} />
			</form>
		</div>
	);
};

export default Subscribe;
