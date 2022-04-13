import React from "react";
import Text from "common/components/UI/text/Text";

import s from "./RewardCard.module.scss";

import giftImage from "assets/images/pics/gift-image.svg";
import useRTL from "common/hooks/useRTL";

const RewardCard = ({ data }) => {
	const { isRtl } = useRTL();
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

					<Text ns="rewards.gift" className={s.title} />
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

			{data.type === "receive" && (
				<Text ns="rewards.receive" className={s.receiveButton} style={{ right: isRtl ? 480 : 50 }} />
			)}
			{data.type === "in-process" && (
				<Text ns="rewards.in-process" className={s.processFloatText} style={{ right: isRtl ? 480 : 50 }} />
			)}
			{data.type === "received" && (
				<Text ns="rewards.received" className={s.receivedFloatText} style={{ right: isRtl ? 480 : 50 }} />
			)}
		</li>
	);
};

export default RewardCard;
