import React from "react"
import PropTypes from "prop-types"
// --- components
import ProfileEditButton from "./ProfileEditButton"

// --- assets
import "./ProfileHeader.scss"
import ProfileImg from "assets/images/test/profile-header.jpg"
import UserPicImg from "assets/images/test/profile-pic.jpg"

export const P_TABS = {
  FAVORITE_TOPICS:"Favorite Topics", // default open tab
  PERFORMANCE:"Performance",
  FRIENDS:"Friends",
}
const tabs = [
  {name: P_TABS.FAVORITE_TOPICS},
  {name: P_TABS.PERFORMANCE},
  {name: P_TABS.FRIENDS},
]

const ProfileHeader = ({tabHandler,activeTab}) => {
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
      <div className="profile--tabs">
        <ul className="d-flex flex-row w-100 p-0 justify-content-center">
          {tabs.map((t, i) => (
            <li
              key={i}
              className={`profile--tabs__tab ${
                t.name === activeTab ? "profile-active-tab":""
              }`}
            >
              <span>{t.name}</span>
              {t.name === activeTab && <span className="profile--tabs__tab__bar"></span>}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

ProfileHeader.propTypes = {
  tabHandler: PropTypes.func,
  activeTab: PropTypes.string
}

export default ProfileHeader;
