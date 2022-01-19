import React from "react";
import PropTypes from "prop-types";

// --- components
import ProfileNoTopics from "./ProfileNoTopics"
// --- assets
import "./ProfileContents.scss";

const ProfileContents = ({data}) => {
  return (
    <div className="profile--contents">
      <ProfileNoTopics />
    </div>
  )
}
export default ProfileContents
