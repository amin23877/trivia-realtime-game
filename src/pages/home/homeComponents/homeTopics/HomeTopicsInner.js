import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MOCK_LEADERS } from 'common/mocks/MOCK';
import { MOCK_BADGETES } from 'common/mocks/MOCK';

import CardLeagueInfo from 'common/components/cardLeagueInfo/CardLeagueInfo';

import './HomeTopicsInner.scss';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';

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

  const mockBadges = MOCK_BADGETES;
  const mockLeaders = MOCK_LEADERS;
  const mockLeadersBest = [mockLeaders[0], mockLeaders[1], mockLeaders[2]];
  const mockLeadersOther = mockLeaders;

  const tabs = ['All points', 'Daily', 'Weekly', 'Monthly'];
  const [activatedTab, setActivatedTab] = useState(0);

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

        <div className='d-flex flex-wrap badges'>
          {mockBadges.map((el, index) => (
            <p key={index} className='badge'>
              {el}
            </p>
          ))}
        </div>

        <div className='board'>
          <p className='title'>Topic Leaderboard</p>

          <div className='tabs'>
            {tabs.map((el, index) => (
              <button
                key={index}
                className={`tab ${activatedTab === index ? 'tab-active' : ''}`}
                onClick={() => setActivatedTab(index)}
              >
                {el}
              </button>
            ))}
          </div>

          <div className='best'>
            <div className='d-flex best-users'>
              {mockLeadersBest.map((el, index) => (
                <div
                  key={index}
                  className={`user ${index === 1 ? 'best-user' : ''}`}
                >
                  <div className='mx-auto avatar'></div>
                  <p className='username'>{el.username}</p>
                  <p className='points'>{`${el.points} points`}</p>
                </div>
              ))}
            </div>

            <div className='d-flex align-items-center levels'>
              <div className='level level-2'>2</div>
              <div className='level level-1'>1</div>
              <div className='level level-3'>3</div>
            </div>
          </div>
          <div className='results'>
            {mockLeadersOther.map((el, index) => (
              <div
                key={index}
                className='d-flex align-items-center _br-bottom user'
              >
                <span className='index'>{`${index + 4}.`}</span>
                <div className='avatar'></div>
                <p className='username'>{el.username}</p>
                <p className='points'>{`${el.points} points`}</p>
              </div>
            ))}

            <p className='seemore'>See more</p>
          </div>
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
