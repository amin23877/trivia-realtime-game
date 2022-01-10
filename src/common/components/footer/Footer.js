import React from 'react';

import './Footer.scss';
import iconHome from 'assets/images/icons/footer-home.svg';
import iconLeague from 'assets/images/icons/footer-league.svg';
import iconPlay from 'assets/images/icons/footer-play.svg';
import iconSearch from 'assets/images/icons/footer-search.svg';
import iconProfile from 'assets/images/icons/footer-profile.svg';

import iconHomeActive from 'assets/images/icons/footer-home-active.svg';
import iconLeagueActive from 'assets/images/icons/footer-league-active.svg';
import iconSearchActive from 'assets/images/icons/footer-search-active.svg';
import iconProfileActive from 'assets/images/icons/footer-profile-active.svg';
import { Navigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);

  const menu = [
    {
      title: 'Home',
      icon: iconHome,
      iconActive: iconHomeActive,
      path: '/',
      isCenter: false,
    },
    {
      title: 'League',
      icon: iconLeague,
      iconActive: iconLeagueActive,
      path: 'league',
      isCenter: false,
    },
    {
      title: '',
      icon: iconPlay,
      iconActive: iconPlay,
      path: 'play',
      isCenter: true,
    },
    {
      title: 'Search',
      icon: iconSearch,
      iconActive: iconSearchActive,
      path: 'search',
      isCenter: false,
    },
    {
      title: 'Profile',
      icon: iconProfile,
      iconActive: iconProfileActive,
      path: 'profile',
      isCenter: false,
    },
  ];
  return (
    <div className='d-flex justify-content-between align-items-center footer'>
      {menu.map((el, index) => (
        <div
          key={index}
          className={`d-flex flex-column justify-content-between align-items-center icons ${
            el.isCenter ? 'icon-center' : ''
          }`}
          onClick={() => Navigate(el.path)}
        >
          <img src={el.icon} alt='' />
          <p>{el.title}</p>
        </div>
      ))}

      {/* <div className='d-flex flex-column justify-content-between align-items-center icons'>
        <img src={iconHome} alt='' />
        <p>Home</p>
      </div> */}

      {/* <div className='d-flex flex-column justify-content-between align-items-center icons'>
        <img src={iconLeague} alt='' />
        <p>League</p>
      </div> */}

      {/* <div className='d-flex flex-column justify-content-between align-items-center icons icon-play'>
        <img src={iconPlay} alt='' />
      </div> */}

      {/* <div className='d-flex flex-column justify-content-between align-items-center icons'>
        <img src={iconSearch} alt='' />
        <p>Search</p>
      </div> */}

      {/* <div className='d-flex flex-column justify-content-between align-items-center icons'>
        <img src={iconProfile} alt='' />
        <p>Profile</p>
      </div> */}
    </div>
  );
};

export default Footer;
