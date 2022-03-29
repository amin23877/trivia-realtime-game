import React from "react";
import PropTypes from "prop-types";

//---assets
import s from "pages/profile/profileTabs/Performance/cards/PlayedHistoryCard.module.scss";
import { IMAGE_URL } from "common/values/CORE";
import { useNavigate } from "react-router-dom";

const PlayedHistoryCard = ({ data }) => {
	const navigate = useNavigate();

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	return (
		<div className={s.card} onClick={(e) => handleNavigate(e, `/topics/${data?.topicLeaderboard?.TopicId?._id}`)}>
			<div className={s.image}>
				<img src={`${IMAGE_URL}${encodeURI(data?.topicLeaderboard?.TopicId?.logo)}`} alt="" />
			</div>

			<div className={s.content}>
				<div>
					<div className={s.title}>{data?.topicLeaderboard?.TopicId?.name}</div>

					<div className={s.category}>{data?.topicLeaderboard?.TopicId?.categoryName}</div>
				</div>

				<div className={s.position}>Your Position:&nbsp; {data?.place || 0}</div>
			</div>

			<div
				data-value={data.percentage + "%"}
				style={{
					backgroundImage: `conic-gradient(var(--bg-secondary) 0%,
					 				  var(--bg-secondary) ${100 - data.percentage}%,
					  				  var(--secondary) ${100 - data.persentage}%,
					   				  var(--secondary) 100%)
					   				`,
				}}
				className={s.circleProgress}
			/>
		</div>
	);
};

PlayedHistoryCard.propTypes = {
	data: PropTypes.object,
};

export default PlayedHistoryCard;
