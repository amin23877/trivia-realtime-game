import React, {useRef,useEffect,useState} from "react"
import PropTypes from "prop-types"
import ProgressBar from "common/components/UI/ProgressBar"
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
          <ProgressBar value={data.xp} />
          <span>{data.max_xp || 100}</span>
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
