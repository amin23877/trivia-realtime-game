import Footer from 'common/components/footer/Footer';
import Header from 'common/components/header/Header';
import ApiCall from 'common/services/ApiCall';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';

const Home = () => {
  const apiCall = new ApiCall();
  const stateGeneral = useSelector((state) => state.stateGeneral);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      console.log(stateGeneral);
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

      <div className='_body-height home-body'>Home</div>

      <div className='_footer br1'>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
