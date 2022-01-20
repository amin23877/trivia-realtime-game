// Reacts
import React from 'react';
// Hooks
import { useNavigate } from 'react-router-dom';
// Packages
// Components, Services, Functions
import { MOCK_CARDINFO } from 'common/mocks/MOCK';
import CardLeagueInfo from 'common/components/cardLeagueInfo/CardLeagueInfo';
// Redux
// Material - lab
// Styles, Icons, Images
import './LeaguesHistory.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const LeaguesHistory = () => {
  const navigate = useNavigate();

  const mockHistory = [
    MOCK_CARDINFO,
    MOCK_CARDINFO,
    MOCK_CARDINFO,
    MOCK_CARDINFO,
    MOCK_CARDINFO,
    MOCK_CARDINFO,
  ];

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className='w-100 h-100 history'>
      <div className='d-flex align-items-center _header _header-shadow history-header'>
        <ArrowBackIcon className='color-primary' onClick={handleGoBack} />
        <div className='_header-title color-primary mx-2'>League History</div>
      </div>

      <div className='_body-height-H history-body '>
        {mockHistory.map((el, index) => (
          <div key={index} className='card-league'>
            <div className='ratio _dish-cardLeagueInfo'>
              <CardLeagueInfo info={el} expired={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LeaguesHistory;
