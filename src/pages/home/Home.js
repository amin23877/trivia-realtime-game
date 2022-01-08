import ApiCall from 'common/services/ApiCall';
import React, { useEffect } from 'react';

import './Home.scss';

const Home = () => {
  const apiCall = new ApiCall();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className='w-100 h-100 home'>
      <div className='_header br1'>
        HEADER
        {/* <Header /> */}
      </div>

      <div className='_body-height home-body'>Home</div>

      <div className='_footer br1'>
        FOOTER
        {/* <Footrer /> */}
      </div>
    </div>
  );
};
export default Home;
