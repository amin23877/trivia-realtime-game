import React from 'react';

import './HomeTopics.scss';
import mainImg from 'assets/images/test/1.png';

const HomeTopics = ({ topics }) => {
  console.log(topics);
  return (
    <div className='w-100 h-100 d-flex justify-content-between align-items-stretch homeTopics br1'>
      {topics.map((el, index) => (
        <div key={index} className='topic-card'>
          <div className='card-img'>
            <img src={mainImg} alt='' />
          </div>
          <div className='d-flex flex-column card-info'>
            <p className='title'>{el.title}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='subtitle'>{el.subTitle}</p>
              <p className='rate'>{el.rate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeTopics;
