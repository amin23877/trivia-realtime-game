import React from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import HelpIcon from '@material-ui/icons/Help';
import './HomeTopicsInner.scss';
import { useNavigate } from 'react-router-dom';
// import imgMain from 'assets/images/test/2.png';

const HomeTopicsInner = () => {
  const styleBgImg = {
    // background: `url('../../../../assets/images/test/2.png')`,
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePlay = () => {
    console.log('TODO handlePlay');
  };

  const handleAddToFavorites = () => {
    console.log('TODO handleAddToFavorites');
  };

  return (
    <div className='w-100 h-100 topicsInner'>
      <div className='topicsInner-header'>
        <div
          className='d-flex justify-content-between align-items-center sec-img'
          style={styleBgImg}
        >
          <p
            className='d-flex justify-content-center align-items-center'
            onClick={handleGoBack}
          >
            <ArrowBackIcon />
          </p>
          <p className='d-flex justify-content-center align-items-center'>
            <ShareOutlinedIcon />
          </p>
        </div>

        <div className='sec-info'>
          <p className='title'>Nature and the environment</p>
          <p className='subtitle'>category of geography</p>
          <div className='pt-2 d-flex justify-content-between align-items-center'>
            <p className='grey'>
              <PlayArrowIcon />
              <span className='mx-1'>54</span>
            </p>
            <p className='grey'>
              <HelpIcon />
              <span className='mx-1'>84</span>
            </p>
            <p className='gold'>
              <StarRateOutlinedIcon />
              <span className='mx-1'>4.5</span>
            </p>
          </div>

          <hr />

          <p className='text-center add' onClick={handleAddToFavorites}>
            <AddIcon /> Add to favorites
          </p>
        </div>
      </div>

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
