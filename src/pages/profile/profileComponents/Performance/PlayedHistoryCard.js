import React from "react";
import PropTypes from "prop-types";

//---assets
import "./PlayedHistoryCard.scss";

const PlayedHistoryCard = ({ data }) => {
	return (
		<div className="played-history-card">
			<div className="played-history-card--image">
				<img src={data.image} alt={data.title} />
			</div>
			<div className="played-history-card--content">
				<div>
					<div className="played-history-card--content__title">{data.title}</div>
					<div className="played-history-card--content__category">{data.category}</div>
				</div>
				<div className="played-history-card--content__position">Your Position:&nbsp; {data.yourPosition}</div>
			</div>
		</div>
	);
};
PlayedHistoryCard.propTypes = {
	data: PropTypes.object,
};
export default PlayedHistoryCard;
