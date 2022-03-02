import React from "react";

import s from "./RewardCard.module.scss";

import giftImage from "assets/images/pics/gift-image.svg";

const RewardCard = ({ data }) => {
	const cardStyle =
		data.type === "in-process" ? s.processReward : data.type === "receive" ? s.receiveReward : s.reward;

	const barStyle = data.type === "in-process" ? s.processBar : data.type === "receive" ? s.receiveBar : s.receivedBar;

	return (
		<li className={cardStyle}>
			<div className={barStyle} />

			<div className="d-flex flex-column">
				<div className="d-flex gap-2 mb-2 ms-2">
					{data.type === "in-process" && (
						<div className={s.timeRemain}>
							<span className={s.timeRemainNumber}>{data.timeRemain}</span>
							days
						</div>
					)}

					<p className={s.title}>Gift Voucher</p>
				</div>

				<p className={s.desc}>{data.desc}</p>

				<p className={s.date}>{data.date}</p>

				{data.type === "in-process" && <div className={s.processGiftInfo}>{data.gift}</div>}
				{data.type === "receive" && <div className={s.receiveGiftInfo}>{data.gift}</div>}
				{data.type === "received" && <div className={s.receivedGiftInfo}>{data.gift}</div>}
			</div>

			<div className={s.image}>
				<img src={giftImage} alt="gift" />
			</div>

			{data.type === "receive" && <div className={s.receiveButton}>Receive</div>}
			{data.type === "in-process" && <div className={s.processFloatText}>In process</div>}
			{data.type === "received" && <div className={s.receivedFloatText}>Received</div>}
		</li>
	);
};

export default RewardCard;
