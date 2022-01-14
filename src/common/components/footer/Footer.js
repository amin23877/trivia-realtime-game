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
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const menu = [
    {
      title: 'Home',
      pathname: '/',
      path: '/',
      isCenter: false,
      icon: iconHome,
      iconActive: iconHomeActive,
    },
    {
      title: 'League',
      pathname: '/league',
      path: '/leagues',
      isCenter: false,
      icon: iconLeague,
      iconActive: iconLeagueActive,
    },
    {
      title: '',
      pathname: '/play',
      path: '/quickPlay',
      isCenter: true,
      icon: iconPlay,
      iconActive: iconPlay,
    },
    {
      title: 'Search',
      pathname: '/search',
      path: '/search',
      isCenter: false,
      icon: iconSearch,
      iconActive: iconSearchActive,
    },
    {
      title: 'Profile',
      pathname: '/profile',
      path: '/profile',
      isCenter: false,
      icon: iconProfile,
      iconActive: iconProfileActive,
    },
  ];

  const handleNavigate = (path) => {
    console.log(path);
    navigate(path);
  };
  return (
    <div className='d-flex justify-content-between align-items-center footer'>
      {menu.map((el, index) => (
        <div
          key={index}
          className={`d-flex flex-column justify-content-between align-items-center icons ${
            el.isCenter ? 'icon-center' : ''
          }`}
          onClick={() => handleNavigate(el.path)}
        >
          {pathname == el.pathname ? (
            <img src={el.iconActive} alt='' />
          ) : (
            <img src={el.icon} alt='' />
          )}
          <p className={`${pathname == el.pathname ? 'p-active' : ''}`}>
            {el.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
