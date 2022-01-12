import React, { useEffect, useState } from 'react';

import './HomeCard.scss';
import mainImg from 'assets/images/pics/home-card-main.svg';
import iconPlayer from 'assets/images/icons/home-card-player.svg';

const HomeCard = ({ info }) => {
  const [time, setTime] = useState(info.remainingTime);
  const [timer, setTimer] = useState({ h: '1', m: '30', s: '0' });

  const handleSetTimer = (time) => {
    let h, m, s, r;

    r = time;

    h = Math.floor(r / 3600);
    r = time % 3600;
    m = Math.floor(r / 60);
    s = time % 60;

    setTimer({
      h: h < 10 ? `0${h}` : `${h}`,
      m: h < 10 ? `0${m}` : `${m}`,
      s: h < 10 ? `0${s}` : `${s}`,
    });

    console.log(h, m, s, r);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      // let handleTimer = setInterval(() => {
      //   if (time > 1) {
      //     handleSetTimer(time);
      //     setTime(time - 1);
      //   } else {
      //     clearInterval(handleTimer);
      //   }
      // }, 1000);
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
          <p className='box'>{timer.h.substring(0, 1)}</p>
          <p className='box'>{timer.h.substring(1, 2)}</p>
          <span className='colon'>{':'}</span>
          <p className='box'>{timer.m.substring(0, 1)}</p>
          <p className='box'>{timer.m.substring(1, 2)}</p>
          <span className='colon'>{':'}</span>
          <p className='box'>{timer.s.substring(0, 1)}</p>
          <p className='box'>{timer.s.substring(1, 2)}</p>
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
