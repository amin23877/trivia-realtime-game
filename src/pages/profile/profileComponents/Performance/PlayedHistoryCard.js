import React from "react";
import PropTypes from "prop-types";

//---assets
import "./PlayedHistoryCard.scss";
import { IMAGE_URL } from "common/values/CORE";
import { useNavigate } from "react-router-dom";

const PlayedHistoryCard = ({ data }) => {
	// console.log("1>>> ", data);
	const navigate = useNavigate();

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	return (
		<div
			className="played-history-card"
			onClick={(e) => handleNavigate(e, `/topics/${data?.topicLeaderboard?.TopicId?._id}`)}
		>
			<div className="played-history-card--image">
				<img src={`${IMAGE_URL}${encodeURI(data?.topicLeaderboard?.TopicId?.logo)}`} alt="" />
			</div>
			<div className="played-history-card--content">
				<div>
					<div className="played-history-card--content__title">{data?.topicLeaderboard?.TopicId?.name}</div>
					<div className="played-history-card--content__category">
						{data?.topicLeaderboard?.TopicId?.categoryName}
					</div>
				</div>
				<div className="played-history-card--content__position">Your Position:&nbsp; {data?.place || 0}</div>
			</div>
		</div>
	);
};
PlayedHistoryCard.propTypes = {
	data: PropTypes.object,
};
export default PlayedHistoryCard;
