import Footer from 'common/components/footer/Footer';
import Header from 'common/components/header/Header';
import ApiCall from 'common/services/ApiCall';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';
import arrowForwardMini from 'assets/images/icons/arrow-forward-mini.svg';
import HomeCard from './homeComponents/homeCard/HomeCard';

const Home = () => {
  const apiCall = new ApiCall();
  const stateGeneral = useSelector((state) => state.stateGeneral);

  const cardInfo = {
    title: 'Chemical Compounds',
    remainingTime: 8407,
    price: 5000,
    players: 2,
    img: '',
  };

  const topics = [
    {
      title: 'Car design',
      subTitle: '10K plays',
      rate: '4.8',
    },
    {
      title: 'Car design',
      subTitle: '10K plays',
      rate: '4.8',
    },
    {
      title: 'Car design',
      subTitle: '10K plays',
      rate: '4.8',
    },
    {
      title: 'Car design',
      subTitle: '10K plays',
      rate: '4.8',
    },
  ];

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      localStorage.setItem('remainingTime', cardInfo.remainingTime);
      // let remainingTime = localStorage.getItem('remainingTime');
      // remainingTime
      //   ? localStorage.setItem('remainingTime', remainingTime)
      //   : localStorage.setItem('remainingTime', cardInfo.remainingTime);

      // console.log(stateGeneral);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className='w-100 h-100 home'>
      <div className='_header'>
        <Header />
      </div>

      <div className='_body-height home-body'>
        <div className='ratio home-body-card'>
          {/* #ratio */}
          <HomeCard info={cardInfo} />
        </div>

        <div className='topics'>
          <div className='d-flex justify-content-between align-items-center topics-header'>
            <p className='title'>Top Topics</p>
            <p className='subtitle'>
              see all
              <img className='mx-2' src={arrowForwardMini} alt='' />
            </p>
          </div>

          <div className='d-flex justify-content-between align-items-center topics-body'>
            {topics.map((el, index) => (
              <div key={index} className='topic-card'></div>
            ))}
          </div>
        </div>
      </div>

      <div className='_footer'>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
