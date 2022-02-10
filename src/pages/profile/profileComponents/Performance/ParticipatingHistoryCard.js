import React from "react";
import PropTypes from "prop-types";
//---assets
import "./ParticipatingHistoryCard.scss";
import { IMAGE_URL } from "common/values/CORE";

const ParticipatingHistoryCard = ({ data }) => {
	// console.log(">>> ", data);
	return (
		<div className="p-3 d-flex">
			<div className="participating-history-card--image">
				<img src={`${IMAGE_URL}${encodeURI(data?.image)}`} alt="" />
			</div>

			<div className="">
				<p className="text-start">{data?.title}</p>
				<div className="participating-history-card">
					<div className="participating-history-card--content">
						{/* <p className="participating-history-card--content__title">
							{data?.leagueLeaderboard?.LeagueId?.name}
						</p> */}
						<p className="participating-history-card--content__date">{data?.date}</p>
						<div className="participating-history-card--content__details">
							<div className="participating-history-card--content__details__score">
								Score:&nbsp; {data?.score || 0}
							</div>
							<div className="participating-history-card--content__details__position">
								Your Position:&nbsp; {data?.yourPosition || 0}
							</div>
							<div className="participating-history-card--content__details__reward">
								Reward:&nbsp; {data?.reward || 0}
							</div>
						</div>
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
