import React from 'react';

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
        <div>
          <AccountBalanceWalletIcon />
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
