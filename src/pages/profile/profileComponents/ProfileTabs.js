import React from "react"
import PropTypes from "prop-types"

const ProfileTabs = ({tabs}) => {
  return (
    <div className="profile--tabs">
      <ul className="d-flex flex-row w-100 p-0 justify-content-center">
        {tabs.map((t, i) => (
          <li
            key={i}
            className={`profile--tabs__tab ${
              t.name === activeTab ? "profile-active-tab" : ""
            }`}
          >
            <span className="profile--tabs__tab__text">{t.name}</span>
            {t.name === activeTab && (
              <span className="profile--tabs__tab__bar"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

ProfileTabs.propTypes = {
  tabs: PropTypes.array
}
export default ProfileTabs;
