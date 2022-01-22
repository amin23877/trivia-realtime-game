import React from "react"
import PropTypes from "prop-types"
//----assets
import "./PerformanceLevelCard.scss"
import PerformanceLevelIcon from "assets/images/icons/performance-level-icon.svg"

export const PerformanceLevelCard = ({data}) => {
  return (
    <div className="level-card">
      <div className="level-card--xp">
        <div className="level-card--xp__value">
          XP: {data.xp}
        </div>
        <div className="level-card--xp__progress">
          <progress value={data.xp} min={0} max={data.max_xp} />
          <span>{data.max_xp}</span>
        </div>
      </div>
      <div className="level-card--level">
        <img src={PerformanceLevelIcon} alt="performance level icon" />
        <span>{data.level}</span>
      </div>
    </div>
  )
}

PerformanceLevelCard.propTypes = {
  data: PropTypes.object
}

export default PerformanceLevelCard
