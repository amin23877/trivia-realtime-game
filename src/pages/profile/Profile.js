import React from 'react';

import { useNavigate } from 'react-router-dom';

import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

import './Profile.scss';
import avatar from 'assets/images/logo/logo.svg';
import iconClose from 'assets/images/icons/icon-close.svg';

const Profile = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

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
