import React from 'react';

import './HomeCard.scss';
import mainImg from 'assets/images/pics/home-card-main.svg';

const HomeCard = () => {
  return (
    <div className='w-100 h-100 d-flex homeCard'>
      <div className='w-100 br2'>کارت</div>
      <img src={mainImg} alt='' />
    </div>
  );
};
export default HomeCard;
