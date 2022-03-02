import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//---assets
import s from "pages/profile/profileTabs/Performance/cards/ParticipatingHistoryCard.module.scss";
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
			className={s.container}
			onClick={(e) => handleNavigate(e, `/leagues/${data?.leagueLeaderboard?.LeagueId?._id}`)}
		>
			<div className={s.cardImage}>
				<img src={`${IMAGE_URL}${encodeURI(data?.leagueLeaderboard?.LeagueId?.logo)}`} alt="" />
			</div>

			<div>
				<p className={s.title}>{data?.leagueLeaderboard?.LeagueId?.name}</p>

				<div className={s.card}>
					<div className={s.content}>
						<p className={s.date}>{date.toDateString()}</p>

						<div className={s.details}>
							<div className={s.score}>Score:&nbsp; {data?.leagueLeaderboard?.score || 0}</div>

							<div className={s.position}>Your Position:&nbsp; {data?.place || 0}</div>

							<div className={s.voucher}>
								<div className={s.giftIcon} />
								Gift Voucher
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
