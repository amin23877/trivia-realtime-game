import React, {useState} from 'react';
import Layout from "../../common/components/layout/Layout"
import ProfileHeader from "./profileComponents/ProfileHeader"
import {P_TABS} from "./profileComponents/ProfileHeader"


import './Profile.scss';


const Profile = () => {
  const [activeTab, setActiveTab] = useState(P_TABS.FAVORITE_TOPICS);
  const tabHandler = (tab) => {
    setActiveTab(tab)
  }
  return (
    <Layout
      header={false}
      className="profile"
    >
      <ProfileHeader activeTab={activeTab} tabHandler={tabHandler} />
      {/* <ProfileContents openTab={openTab} data={data} /> */}
    </Layout>
  );
};
export default Profile;
