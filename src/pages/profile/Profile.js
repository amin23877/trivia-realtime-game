import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import _ from 'lodash';

import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

import './Profile.scss';
import avatar from 'assets/images/logo/logo.svg';
import iconClose from 'assets/images/icons/icon-close.svg';
import { useSelector } from 'react-redux';
import ApiCall from 'common/services/ApiCall';
import { useDispatch } from 'react-redux';
import { SET_USER_INFO } from 'redux/actions/mainActions/generalActions';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiCall = new ApiCall();

  const stateGeneral = useSelector((state) => state.stateGeneral);

  const [profile, setProfile] = useState(stateGeneral.userInfo);

  const handleGoBack = () => {
    navigate(-1);
  };

  const getProfile = () => {
    console.log('TODO');

    apiCall
      .get('user/me')
      .then((res) => {
        console.log('res > ', res);
        dispatch(SET_USER_INFO(res.data.user));
      })
      .catch((err) => {
        console.log('err > ', err);
      });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (_.isEmpty(profile)) getProfile();
      console.log(stateGeneral);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='w-100 h-100 profile'>
      <div className='d-flex justify-content-between align-items-stretch profile-header'>
        <div className=''>
          <div className='avatar'>{/* <img src={avatar} alt='' /> */}</div>

          <p className='name'>Asma Tanavar</p>
          <p className='level'>Level 7</p>
        </div>

        <div className='close'>
          <img src={iconClose} onClick={handleGoBack} alt='' />
        </div>
      </div>
      <div className='profile-body'>
        <div className='d-flex align-items-center menu-item br-b'>
          <AccountBalanceWalletOutlinedIcon className='icon' />
          <p>Wallet</p>
        </div>

        <div className='d-flex align-items-center menu-item br-b'>
          <NotificationsOutlinedIcon className='icon' />
          <p>notification</p>
        </div>

        <div className='d-flex align-items-center menu-item br-b'>
          <SettingsOutlinedIcon className='icon' />
          <p>Settings</p>
        </div>

        <div className='d-flex align-items-center menu-item br-b'>
          <ShareOutlinedIcon className='icon' />
          <p>introduce to friends</p>
        </div>

        <div className='d-flex align-items-center menu-item'>
          <HeadsetMicOutlinedIcon className='icon' />
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
