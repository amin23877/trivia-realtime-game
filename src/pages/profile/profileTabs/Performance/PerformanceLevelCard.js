import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "common/components/UI/ProgressBar";
//----assets
import s from "./ProfilePerformance.module.scss";
import PerformanceLevelIcon from "assets/images/icons/performance-level-icon.svg";

export const PerformanceLevelCard = ({ data }) => {
	return (
		<div className={s.levelCard}>
			<div className={s.xp}>
				<div className={s.xpValue}>XP: {data?.xp}</div>

				<div className={s.xpProgress}>
					<ProgressBar value={data?.xp} />

					<span>{data?.max_xp || 100}</span>
				</div>
			</div>

			<div className={s.level}>
				<img className={s.stars} src={PerformanceLevelIcon} alt="performance level icon" />

				<span>{data?.level}</span>
			</div>
		</div>
	);
};

PerformanceLevelCard.propTypes = {
	data: PropTypes.object,
};

export default PerformanceLevelCard;
