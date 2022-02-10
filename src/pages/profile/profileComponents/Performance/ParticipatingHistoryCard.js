import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//---assets
import "./ParticipatingHistoryCard.scss";
import { IMAGE_URL } from "common/values/CORE";
import { useNavigate } from "react-router-dom";

const ParticipatingHistoryCard = ({ data }) => {
	// console.log("1>>> ", data);
	const navigate = useNavigate();

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	var date = new Date(data?.leagueLeaderboard?.LeagueId?.endTime);

	const [rewards, setRewards] = useState(0);
	const handleSetRewards = (rewards) => {
		let rewardsSum = 0;
		rewards?.forEach((el) => {
			rewardsSum += el.place ? el?.reward : (el?.endPlace - el?.startPlace + 1) * el?.reward;
		});
		setRewards(rewardsSum);
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			handleSetRewards(data?.leagueLeaderboard?.LeagueId?.rewards);
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div
			className="p-3 d-flex"
			onClick={(e) => handleNavigate(e, `/leagues/${data?.leagueLeaderboard?.LeagueId?._id}`)}
		>
			<div className="participating-history-card--image">
				<img src={`${IMAGE_URL}${encodeURI(data?.leagueLeaderboard?.LeagueId?.logo)}`} alt="" />
			</div>

			<div className="">
				<p className="text-start participating-title">{data?.leagueLeaderboard?.LeagueId?.name}</p>
				<div className="participating-history-card">
					<div className="participating-history-card--content">
						{/* <p className="participating-history-card--content__title">
							{data?.leagueLeaderboard?.LeagueId?.name}
						</p> */}
						<p className="participating-history-card--content__date">{date.toDateString()}</p>
						<div className="participating-history-card--content__details">
							<div className="participating-history-card--content__details__score">
								Score:&nbsp; {data?.leagueLeaderboard?.score || 0}
							</div>
							<div className="participating-history-card--content__details__position">
								Your Position:&nbsp; {data?.place || 0}
							</div>
							<div className="participating-history-card--content__details__reward">
								Reward:&nbsp; {rewards || 0}
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
