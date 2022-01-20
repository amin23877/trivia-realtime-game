// Reacts
import React, { useEffect } from 'react';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Packages
// Components, Services, Functions
import Menu from 'pages/menu/Menu';
import ApiCall from 'common/services/ApiCall';
import { MOCK_TOPICS } from 'common/mocks/MOCK';
import { MOCK_CARDINFO } from 'common/mocks/MOCK';
import Footer from 'common/components/footer/Footer';
import Header from 'common/components/header/Header';
import HomeTopics from './homeComponents/homeTopics/HomeTopics';
import CardLeagueInfo from 'common/components/cardLeagueInfo/CardLeagueInfo';
import ModalConfirmDeactivation from 'pages/modals/ModalConfirmDeactivation';
// Redux
import { MODALS } from 'common/values/MODALS';
// Material - lab
import { Drawer } from '@material-ui/core';
// Styles, Icons, Images
import './Home.scss';
import arrowForwardMini from 'assets/images/icons/arrow-forward-mini.svg';

const Home = () => {
  const navigate = useNavigate();
  const apiCall = new ApiCall();

  const stateGeneral = useSelector((state) => state.stateGeneral);

  const cardInfo = MOCK_CARDINFO;

  const homeTopics = MOCK_TOPICS;

  const handleNavigate = (event, path) => {
    event.stopPropagation();
    console.log(path);
    navigate(path);
  };
  // Drawer Menu --------------------------------------
  const [openDrawerMenu, setOpenDrawerMenu] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawerMenu(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawerMenu(false);
  };
  // -------------------------------------- Drawer Menu

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

      <Drawer variant='persistent' anchor='left' open={openDrawerMenu}>
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

      {/* #modalUse step0 */}
      {stateGeneral.modals[MODALS.deactivation] ? (
        <ModalConfirmDeactivation />
      ) : null}
    </div>
  );
};
export default Home;
