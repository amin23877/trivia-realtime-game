import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';
import logo from 'assets/images/icons/header-logo.svg';
import iconMenu from 'assets/images/icons/header-menu.svg';
import iconPeople from 'assets/images/icons/header-people.svg';

const Header = ({ onDrawerOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='d-flex justify-content-between align-items-center header'>
      {/* <img src={iconMenu} onClick={() => handleNavigate('/menu')} alt='' /> */}
      <img src={iconMenu} onClick={onDrawerOpen} alt='' />
      <img src={logo} alt='' />
      <img src={iconPeople} alt='' onClick={() => handleNavigate('/friends')} />
    </div>
  );
};

export default Header;
