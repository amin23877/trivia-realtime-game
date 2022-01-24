import React, {useState,useEffect} from 'react';
// import PropTypes from "prop-types"
import {Outlet, useNavigate,useParams} from 'react-router-dom';

// --- components
import Layout from "common/components/layout/Layout"
import ProfileHeader from "./profileComponents/ProfileHeader"
import ProfileContents from "./profileComponents/ProfileContents"
// --- assets
import 'pages/profile/Profile.scss';

const ProfileFriend = () => {
  const navigate = useNavigate();
  const params = useParams();
  const friendId = params.id;
  useEffect(() => {
    console.log(params)
    //fetching friend profile
  },[]);
  return (
    <Layout
      header={false}
      className="profile d-flex flex-column"
    >
      <ProfileHeader data={{}}/>
      <ProfileContents>
        <Outlet />
      </ProfileContents>
    </Layout>
  );
};
ProfileFriend.propTypes = {
}
export default ProfileFriend;