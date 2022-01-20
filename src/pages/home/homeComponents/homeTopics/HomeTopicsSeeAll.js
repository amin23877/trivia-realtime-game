import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import _ from 'lodash';
import Pagination from '@material-ui/lab/Pagination'; // #pagination step0

import { MOCK_TOPICS_ALL } from 'common/mocks/MOCK';

import './HomeTopicsSeeAll.scss';
import imgMain from 'assets/images/test/3.png';
import iconRate from 'assets/images/icons/rate-mini.svg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const HomeTopicsSeeAll = () => {
  const navigate = useNavigate();

  const paths = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Top Topics',
      path: '',
    },
  ];

  const topicsAll = MOCK_TOPICS_ALL;

  const pageSize = 5;

  const [pagination, setPagination] = useState({ page: 0, count: 0 });
  const [topicsAllSelected, setTopicsAllSelected] = useState([...topicsAll]);

  const handleNavigate = (event, path) => {
    event.stopPropagation();
    console.log(path);
    navigate(path);
  };

  const handlePagination = (event, value) => {
    console.log(value);
    setPagination({
      ...pagination,
      page: value,
    });

    console.log(topicsAll);

    let _TopicsAllSelected = _.slice(
      topicsAll,
      [(value - 1) * pageSize],
      [(value - 1) * pageSize + pageSize]
    );
    setTopicsAllSelected(_TopicsAllSelected);

    console.log(_TopicsAllSelected);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setPagination({
        ...pagination,
        count: Math.ceil(topicsAll.length / pageSize),
      });
      let _TopicsAllSelected = _.slice(
        topicsAll,
        [pagination.page],
        [pagination.page + pageSize]
      );
      setTopicsAllSelected(_TopicsAllSelected);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='w-100 h-100 topicsSeeAll'>
      <div className='d-flex align-items-center _header-path'>
        {paths.map((el, index) => (
          <p
            key={index}
            className={`_path ${index === paths.length - 1 ? '_lastPath' : ''}`}
            onClick={(e) => {
              handleNavigate(e, el.path);
            }}
          >
            {el.name}

            {!(index === paths.length - 1) ? (
              <ArrowForwardIosIcon className='_arrow' />
            ) : null}
          </p>
        ))}
      </div>

      <div className='topicsSeeAll-body'>
        <div className='d-flex flex-wrap justify-content-around'>
          {topicsAllSelected.map((el, index) => (
            <div
              key={index}
              className='_topic-card'
              onClick={(e) => handleNavigate(e, '/topics/5')}
            >
              <div className='card-img'>
                <img src={imgMain} alt='' />
              </div>
              <div className='d-flex flex-column justify-content-between card-info'>
                <p className='title'>{el.title}</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='subtitle'>
                    <span>{el.questions}</span>
                    <span className='mx-1'>questions /</span>

                    <span>{el.plays}</span>
                    <span className='mx-1'>plays</span>
                  </p>
                  <p className='rate'>
                    <img className='mx-1' src={iconRate} alt='' />
                    <span>{el.rate}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* #pagination step1 */}
        <Pagination
          className='my-3 _pagination'
          count={pagination.count}
          shape='rounded'
          onChange={handlePagination}
        />
      </div>
    </div>
  );
};
export default HomeTopicsSeeAll;
