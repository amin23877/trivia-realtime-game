// Reacts
import React, { useEffect, useState } from 'react';
// Hooks
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Packages
import _ from 'lodash';
// Components, Services, Functions
import ApiCall from 'common/services/ApiCall';
// Redux
import { useDispatch } from 'react-redux';
import { MODALS } from 'common/values/MODALS';
import { SET_MODALS } from 'redux/actions/mainActions/generalActions';
import { SET_USER_INFO } from 'redux/actions/mainActions/generalActions';
// Material - lab
// Styles, Icons, Images
import './Menu.scss';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

import avatar from 'assets/images/logo/logo.svg';

const Menu = ({ onDrawerClose }) => {
  const navigate = useNavigate();

  const apiCall = new ApiCall();

  const dispatch = useDispatch();
  const stateGeneral = useSelector((state) => state.stateGeneral);

  const [userInfo, setUserInfo] = useState(stateGeneral.userInfo);

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const getUserInfo = () => {
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

  const handleOpenModal = (value) => {
    // #modalUse step1
    onDrawerClose();
    dispatch(SET_MODALS({ [MODALS[value]]: true }));
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (_.isEmpty(userInfo)) getUserInfo();
      console.log(stateGeneral);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='d-flex flex-column w-100 h-100 menu'>
      <div className='d-flex justify-content-between align-items-stretch menu-header'>
        <div className=''>
          <div className='avatar'>{/* <img src={avatar} alt='' /> */}</div>

          <p className='name'>Asma Tanavar</p>
          <p className='level'>Level 7</p>
        </div>

        <div className='close'>
          <CancelOutlinedIcon className='icon' onClick={onDrawerClose} />
        </div>
      </div>
      <div className='menu-body'>
        <div
          className='d-flex align-items-center menu-item _br-bottom'
          onClick={() => navigate('wallet')}
        >
          <AccountBalanceWalletOutlinedIcon className='icon' />
          <p>Wallet</p>
        </div>

        <div
          className='d-flex align-items-center menu-item _br-bottom'
          onClick={() => navigate('notification')}
        >
          <NotificationsOutlinedIcon className='icon' />
          <p>notification</p>
        </div>

        <div className='d-flex align-items-center menu-item _br-bottom'>
          <SettingsOutlinedIcon className='icon' />
          <p>Settings</p>
        </div>

        <div className='d-flex align-items-center menu-item _br-bottom'>
          <ShareOutlinedIcon className='icon' />
          <p>introduce to friends</p>
        </div>

        <div className='d-flex align-items-center menu-item _br-bottom'>
          <HeadsetMicOutlinedIcon className='icon' />
          <p>Contact us</p>
        </div>

        <div className='d-flex align-items-center menu-item _br-bottom'>
          <CachedOutlinedIcon className='icon' />
          <p>Update</p>
        </div>

        <div className='d-flex align-items-center menu-item'>
          <ExitToAppOutlinedIcon className='icon' />
          <p>Logout</p>
        </div>
      </div>

      <div className='d-flex align-items-center menu-item deactivation mt-auto mb-0'>
        <PowerSettingsNewOutlinedIcon
          className='icon'
          onClick={() => handleOpenModal('deactivation')}
        />
        <p onClick={() => handleOpenModal('deactivation')}>deactivation</p>
      </div>
    </div>
  );
};
export default Menu;
