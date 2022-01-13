import React from 'react';

import ShareIcon from '@material-ui/icons/Share';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import './Profile.scss';
import avatar from 'assets/images/logo/logo.svg';
import iconClose from 'assets/images/icons/icon-close.svg';

const Profile = () => {
  return (
    <div className='w-100 h-100 profile'>
      <div className='d-flex justify-content-between align-items-stretch profile-header'>
        <div className=''>
          <div className='avatar'>{/* <img src={avatar} alt='' /> */}</div>

          <p className='name'>Asma Tanavar</p>
          <p className='level'>Level 7</p>
        </div>

        <div className='close'>
          <img src={iconClose} alt='' />
        </div>
      </div>
      <div className='profile-body'>
        <div className='d-flex align-items-center menu-item br-b'>
          <AccountBalanceWalletIcon className='icon' />
          <p>Wallet</p>
        </div>

        <div className='d-flex align-items-center menu-item br-b'>
          <NotificationsIcon className='icon' />
          <p>notification</p>
        </div>

        <div className='d-flex align-items-center menu-item br-b'>
          <SettingsIcon className='icon' />
          <p>Settings</p>
        </div>

        <div className='d-flex align-items-center menu-item br-b'>
          <ShareIcon className='icon' />
          <p>introduce to friends</p>
        </div>

        <div className='d-flex align-items-center menu-item'>
          <HeadsetMicIcon className='icon' />
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
