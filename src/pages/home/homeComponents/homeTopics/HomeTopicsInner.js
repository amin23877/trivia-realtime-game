import React from 'react';

import CardLeagueInfo from 'common/components/cardLeagueInfo/CardLeagueInfo';

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

  const cardInfo = {
    title: 'Chemical Compounds',
    remainingTime: 8407,
    price: 5000,
    players: 2,
    img: '',
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

      <div className='topicsInner-body'>
        <div className='ratio _dish-cardLeagueInfo'>
          <CardLeagueInfo info={cardInfo} />
        </div>

        <div className='description'>
          <p className='title'>Description</p>
          <p className='text'>
            Considering the great and undeniable importance of nature and the
            environment in the life of every creature on this planet, I decided
            to teach this subject to get better and more acquainted with the
            environment around you and to create a culture of environmental
            care. And let me introduce you to the challenges around it. I'm glad
            you are with me.
          </p>
        </div>
      </div>

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
