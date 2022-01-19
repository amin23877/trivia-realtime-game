import React, {useState,useEffect} from "react"
import {Link,useLocation} from "react-router-dom"

// --- assets
import "./ProfileTabs.scss"

export const Profile_Tabs = {
  FAVORITE_TOPICS:"FAVORITE-TOPICS",
  PERFORMANCE:"PERFORMANCE",
  FRIENDS:"FRIENDS",
}

const tabs = [
  {name: "Favorite Topics",signifier: Profile_Tabs.FAVORITE_TOPICS, link: "/profile/favorite-topics"},
  {name: "Performance",signifier: Profile_Tabs.PERFORMANCE, link: "/profile/performance"},
  {name: "Friends",signifier: Profile_Tabs.FRIENDS, link: "/profile/friends"},
]

const ProfileTabs = () => {
  const [activeTab,setActiveTab] = useState();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    const lastPieceRegex = /\/([\w-_\s]+)$/i;
    const currentTab = pathname.match(lastPieceRegex)[1].toUpperCase();
    setActiveTab(currentTab);
  },[pathname]);
  return (
    <div className="profile--tabs">
      <ul className="d-flex flex-row w-100 p-0 justify-content-center">
        {tabs.map((t, i) => (
          <li
            key={i}
            className={`profile--tabs__tab ${
              t.signifier === activeTab ? "profile-active-tab" : ""
            }`}
          >
            <Link to={t.link}>
              <span className="profile--tabs__tab__text">{t.name}</span>
              {t.signifier === activeTab && (
                <span className="profile--tabs__tab__bar"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProfileTabs;
