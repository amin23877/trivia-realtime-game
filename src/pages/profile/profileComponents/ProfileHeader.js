import React from "react"
import PropTypes from "prop-types"
// --- components
import ProfileEditButton from "./ProfileEditButton"
import ProfileTabs from "./ProfileTabs"

// --- assets
import "./ProfileHeader.scss"
import ProfileImg from "assets/images/test/profile-header.jpg"
import UserPicImg from "assets/images/test/profile-pic.jpg"


const ProfileHeader = ({activeTab}) => {
  return (
    <header className="profile--header">
      <img
        src={ProfileImg}
        className="profile--header__image"
        alt="Profile header image"
      />
      <div className="profile--header__info">
        <img
          src={UserPicImg}
          className="profile--header__info__pic"
          alt="User picture"
        />
        <ProfileEditButton onClick={() => console.log("navigating to edit profile page")} />
        <div className="d-flex flex-column text-left text-capitalize">
          <div className="profile--header__info__name">Alex Green</div>
          <div className="profile--header__info__level">Level 6</div>
        </div>
      </div>
      <ProfileTabs activeTab={activeTab} />
    </header>
  );
}

ProfileHeader.propTypes = {
  tabHandler: PropTypes.func,
  activeTab: PropTypes.string
}

export default ProfileHeader;
