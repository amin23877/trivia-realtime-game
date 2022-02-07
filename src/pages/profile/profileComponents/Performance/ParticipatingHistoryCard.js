import React from "react";
import PropTypes from "prop-types";
//---assets
import "./ParticipatingHistoryCard.scss";
import { IMAGE_URL } from "common/values/CORE";

const ParticipatingHistoryCard = ({ data }) => {
	return (
		<div className="participating-history-card">
			<div className="participating-history-card--image">
				<img src={data.image} alt={data.title} />
				<img src={`${IMAGE_URL}${encodeURI(data?.leagueLeaderboard?.LeagueId?.logo)}`} alt="" />
			</div>
			<div className="participating-history-card--content">
				<p className="participating-history-card--content__title">{data?.leagueLeaderboard?.LeagueId?.name}</p>
				<p className="participating-history-card--content__date">
					{data?.leagueLeaderboard?.LeagueId?.endTime}
				</p>
				<div className="participating-history-card--content__details">
					<div className="participating-history-card--content__details__score">
						Score:&nbsp; {data?.score}
					</div>
					<div className="participating-history-card--content__details__position">
						Your Position:&nbsp; {data?.place}
					</div>
					<div className="participating-history-card--content__details__reward">
						Reward:&nbsp; {data?.reward}
					</div>
				</div>
			</div>
		</div>
	);
};

ParticipatingHistoryCard.propTypes = {
	data: PropTypes.object,
};

export default ParticipatingHistoryCard;
