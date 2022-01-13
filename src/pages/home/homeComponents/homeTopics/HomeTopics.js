import React from 'react';

import './HomeTopics.scss';
import mainImg from 'assets/images/test/1.png';

const HomeTopics = ({ topics }) => {
  return (
    <div className='w-100 h-100 d-flex justify-content-between align-items-center homeTopics br1'>
      {topics.map((el, index) => (
        <div key={index} className='ratio topic-card'>
          <div className='card-img br2'>
            <img src={mainImg} alt='' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeTopics;
