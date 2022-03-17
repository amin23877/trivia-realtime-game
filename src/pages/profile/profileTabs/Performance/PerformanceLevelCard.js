import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "common/components/UI/ProgressBar";
//----assets
import s from "./ProfilePerformance.module.scss";
import PerformanceLevelIcon from "assets/images/icons/performance-level-icon.svg";

export const PerformanceLevelCard = ({ xp, levelXP, level }) => {
	console.log(xp);
	return (
		<div className={s.levelCard}>
			<div className={s.xp}>
				<div className={s.xpValue}>XP: {xp}</div>

				<div className={s.xpProgress}>
					{/* value must be in percent */}
					<ProgressBar value={(xp * 100) / 800} />

					<span>{levelXP}</span>
				</div>
			</div>

			<div className={s.level}>
				<img className={s.stars} src={PerformanceLevelIcon} alt="performance level icon" />

				<span>{level}</span>
			</div>
		</div>
	);
};

PerformanceLevelCard.propTypes = {
	data: PropTypes.object,
};

export default PerformanceLevelCard;
