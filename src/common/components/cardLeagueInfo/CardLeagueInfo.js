import React, { useEffect } from 'react';

import './CardLeagueInfo.scss';
import imgExpired from 'assets/images/icons/expired.svg';
import imgMain from 'assets/images/pics/home-card-main.svg';
import iconPlayer from 'assets/images/icons/card-player.svg';

// #countdownTimer step2
import Countdown from 'react-countdown';
import CountdownTimer from 'common/components/CountdownTimer/CountDownTimer';
// import CountdownTimer from 'common/components/countdownTimer/CountDownTimer';

const CardLeagueInfo = ({ info, expired = false }) => {
  // const timeRemain = localStorage.getItem('remainingTime');
  const timeRemain = 8407;

  const handleStop = (e) => {
    console.log(e);
  };

  return (
    <div
      className={`w-100 h-100 d-flex cardLeagueInfo ${
        expired ? 'expired' : ''
      }`}
    >
      {expired ? (
        <div className='expired-empty'>
          <img className='img-expired' src={imgExpired} alt='' />
        </div>
      ) : null}
      <div className='d-flex flex-column justify-content-between  w-100 cardLeagueInfo-info'>
        <div className='d-flex justify-content-start align-items-center'>
          <div className={`bullet ${expired ? 'bullet-red' : ''}`}></div>
          <p className='title'> {info.title}</p>
        </div>

        <div className='d-flex timer'>
          {/* #countdownTimer step3 */}
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
      <img src={imgMain} alt='' />
      {/* <img src={info.img} alt='' /> */}
    </div>
  );
};
export default CardLeagueInfo;
