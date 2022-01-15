import React from 'react';
import './HomeTopicsInner.scss';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const handlePlay = () => {};

const HomeTopicsInner = () => {
  return (
    <div className='w-100 h-100 topicsInner'>
      <div className='topicsInner-header'></div>

      <div className='topicsInner-body'></div>

      <div className='d-flex justify-content-center align-items-center topicsInner-footer'>
        <button className='btn-play' onClick={handlePlay}>
          <span className='mx-1'>Play</span>
          <PlayArrowIcon className='mx-1' />
        </button>
      </div>
    </div>
  );
};
export default HomeTopicsInner;
