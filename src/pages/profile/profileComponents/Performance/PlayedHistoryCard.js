import React from "react";
import PropTypes from "prop-types";

//---assets
import "./PlayedHistoryCard.scss";
import { IMAGE_URL } from "common/values/CORE";

const PlayedHistoryCard = ({ data }) => {
	return (
		<div className="played-history-card">
			<div className="played-history-card--image">
				<img src={`${IMAGE_URL}${encodeURI(data?.TopicId?.logo)}`} alt="" />
			</div>
			<div className="played-history-card--content">
				<div>
					<div className="played-history-card--content__title">{data?.TopicId?.name}</div>
					<div className="played-history-card--content__category">{data?.TopicId?.categoryName}</div>
				</div>
				<div className="played-history-card--content__position">Your Position:&nbsp; {data?.place}</div>
			</div>
		</div>
	);
};
PlayedHistoryCard.propTypes = {
	data: PropTypes.object,
};
export default PlayedHistoryCard;
