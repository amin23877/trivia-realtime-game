import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';
import logo from 'assets/images/icons/header-logo.svg';
import iconMenu from 'assets/images/icons/header-menu.svg';
import iconPeople from 'assets/images/icons/header-people.svg';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/menu');
  };

  return (
    <div className='d-flex justify-content-between align-items-center header'>
      <img src={iconMenu} onClick={handleNavigate} alt='' />
      <img src={logo} alt='' />
      <img src={iconPeople} alt='' />
    </div>
  );
};

export default Header;
