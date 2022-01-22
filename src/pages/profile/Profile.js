import React, {useState,useEffect} from 'react';
import PropTypes from "prop-types"
import {Outlet, useNavigate, usePath} from 'react-router-dom';
// import {} from "";

// --- components
import Layout from "../../common/components/layout/Layout"
import ProfileHeader from "./profileComponents/ProfileHeader"
import ProfileContents from "./profileComponents/ProfileContents"
// --- assets
import './Profile.scss';

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/profile/favorite-topics");
  },[]);
  return (
    <Layout
      header={false}
      className="profile d-flex flex-column"
    >
      <ProfileHeader/>
      <ProfileContents>
        <Outlet />
      </ProfileContents>
    </Layout>
  );
};
Profile.propTypes = {
  tab: PropTypes.string
}
export default Profile;
