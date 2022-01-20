import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApiCall from 'common/services/ApiCall';

import Footer from 'common/components/footer/Footer';
import Header from 'common/components/header/Header';
import HomeTopics from './homeComponents/homeTopics/HomeTopics';
import CardLeagueInfo from 'common/components/cardLeagueInfo/CardLeagueInfo';

import { MOCK_TOPICS } from 'common/mocks/MOCK';

import { Drawer } from '@material-ui/core';

import './Home.scss';
import arrowForwardMini from 'assets/images/icons/arrow-forward-mini.svg';
import Menu from 'pages/menu/Menu';

const Home = () => {
  const navigate = useNavigate();
  const apiCall = new ApiCall();

  const stateGeneral = useSelector((state) => state.stateGeneral);

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

  const [openDrawerMenu, setOpenDrawerMenu] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawerMenu(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawerMenu(false);
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
  return (
    <div className='w-100 h-100 home'>
      <div className='_header'>
        <Header onDrawerOpen={handleDrawerOpen} />
      </div>

      <Drawer
        // className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={openDrawerMenu}
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
      >
        <Menu onDrawerClose={handleDrawerClose} />
      </Drawer>
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
      </div>

      <div className='_footer'>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
