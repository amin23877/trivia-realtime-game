import React, { useEffect, useState } from 'react';

import './HomeCard.scss';
import mainImg from 'assets/images/pics/home-card-main.svg';
import iconPlayer from 'assets/images/icons/home-card-player.svg';
import Countdown from 'react-countdown';
import CountdownTimer from 'common/components/CountdownTimer/CountDownTimer';

const HomeCard = ({ info }) => {
  const timeRemain = localStorage.getItem('remainingTime');

  const handleStop = (e) => {
    console.log(e);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='w-100 h-100 d-flex homeCard'>
      <div className='d-flex flex-column justify-content-between  w-100 homeCard-info'>
        <div className='d-flex justify-content-start align-items-center'>
          <div className='bullet'></div>
          <p className='title'> {info.title}</p>
        </div>

        <div className='d-flex timer'>
          <Countdown
            date={Date.now() + timeRemain * 1000}
            renderer={CountdownTimer}
            onComplete={(e) => handleStop(e)}
          />
        </div>

        <p className='price'>{`$${info.price}`}</p>
        <div className='d-flex justify-content-start align-items-center players'>
          <img src={iconPlayer} alt='' />
          <p>{`${info.players} player`}</p>
        </div>
      </div>
      <img src={mainImg} alt='' />
      {/* <img src={info.img} alt='' /> */}
    </div>
  );
};
export default HomeCard;
