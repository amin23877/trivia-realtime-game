import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApiCall from 'common/services/ApiCall';

import Footer from 'common/components/footer/Footer';
import Header from 'common/components/header/Header';
import HomeTopics from './homeComponents/homeTopics/HomeTopics';
import SelectGameType from './homeComponents/selectGameType/SelectGameType';
import CardLeagueInfo from 'common/components/cardLeagueInfo/CardLeagueInfo';

import { MOCK_TOPICS } from 'common/mocks/MOCK';

import './Home.scss';
import arrowForwardMini from 'assets/images/icons/arrow-forward-mini.svg';

const Home = () => {
  const navigate = useNavigate();
  const apiCall = new ApiCall();

  const stateGeneral = useSelector((state) => state.stateGeneral);
  const [openGameTypes, setOpenGameTypes] = useState(false)
  const cardInfo = {
    title: 'Chemical Compounds',
    remainingTime: 8407,
    price: 5000,
    players: 2,
    img: '',
  };

  const homeTopics = MOCK_TOPICS;

  const handleNavigate = (event, path) => {
    event.stopPropagation();
    console.log(path);
    navigate(path);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      // localStorage.setItem('remainingTime', cardInfo.remainingTime);
      // let remainingTime = localStorage.getItem('remainingTime');
      // remainingTime
      //   ? localStorage.setItem('remainingTime', remainingTime)
      //   : localStorage.setItem('remainingTime', cardInfo.remainingTime);
      console.log(stateGeneral);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  const _handleOpenGameTypes = (state=true) => {
    setOpenGameTypes(state)
  }
  return (
    <div className='w-100 h-100 home'>
      <div className='_header'>
        <Header />
      </div>

      <div className='_body-height-HF home-body'>
        <div className='card-league'>
          <div className='ratio _dish-cardLeagueInfo'>
            {/* #ratio */}
            <CardLeagueInfo info={cardInfo} />
          </div>
        </div>

        {homeTopics.map((item, index) => (
          <div
            key={index}
            className='topics'
            onClick={(e) => handleNavigate(e, '/topics/5')}
          >
            <div className='d-flex justify-content-between align-items-center topics-header'>
              <p className='title'>{item.topic}</p>
              <p
                className='subtitle'
                onClick={(e) => handleNavigate(e, '/topics/5/all')}
              >
                see all
                <img className='mx-2' src={arrowForwardMini} alt='' />
              </p>
            </div>

            <div>
              <HomeTopics topics={item.topicList} />
            </div>
          </div>
        ))}
        {
          openGameTypes &&
          <SelectGameType open={openGameTypes} handleOpenGameTypes={_handleOpenGameTypes}/>
        }

      </div>

      <div className='_footer'>
        <Footer handleOpenGameTypes={_handleOpenGameTypes} />
      </div>
    </div>
  );
};
export default Home;
