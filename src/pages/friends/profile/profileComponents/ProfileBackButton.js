import React from "react";
import PropTypes from "prop-types";

// ---assets
import "./ProfileBackButton.scss"
import BackIcon from "assets/images/icons/arrow-back-friend-profile.svg"


const ProfileBackButton = ({onClick}) => {
  return (
    <button className="profile--back-button" onClick={onClick}>
      <img src={BackIcon} className="profile--back-button__icon" alt="back profile icon" />
    </button>
  )
}

ProfileBackButton.propTypes = {
  onClick: PropTypes.func
}

export default ProfileBackButton
