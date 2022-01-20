import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@material-ui/core';

import ApiCall from 'common/services/ApiCall';

import './Login.scss';
import logo from 'assets/images/logo/logo.svg';
import imgMain from 'assets/images/pics/login-otp.svg';
import arrowBack from 'assets/images/icons/arrow-back.svg';
import { useDispatch } from 'react-redux';
import { SET_USER_INFO } from 'redux/actions/mainActions/generalActions';

const VerificationCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const apiCall = new ApiCall();

  let phone = localStorage.getItem('phone');

  const [otp, setOtp] = useState('');
  const [isValidOtp, setIsValidOtp] = useState(true);

  const messageErrorDefault = 'Enter the verification code first';
  const [messageError, setMessageError] = useState(messageErrorDefault);
  const [hasTime, setHasTime] = useState(false);
  const [timer, setTimer] = useState('01:30');

  const handlSetOtp = (e) => {
    if (!isValidOtp && e.target.value.length) {
      setIsValidOtp(true);
      setMessageError(messageErrorDefault);
    }
    setOtp(e.target.value);
  };

  const handleRegister = () => {
    if (phone && otp) {
      apiCall
        .post('user/code', {
          phone: phone,
          code: otp,
        })
        .then((res) => {
          console.log('res > ', res);

          res.data.token
            ? localStorage.setItem('token', res.data.token)
            : localStorage.removeItem('token');

          dispatch(SET_USER_INFO(res.data.user));

          navigate('/');
        })
        .catch((err) => {
          console.log('err > ', err);
          localStorage.removeItem('token');
          setIsValidOtp(true);
          if (err.error) {
            setMessageError(err.error);
          } else {
            setMessageError('Error!');
          }
        });
    } else if (!phone) {
      navigate('/login');
    } else if (!otp) {
      setIsValidOtp(false);
    }
  };

  const handleReGetOtp = () => {
    localStorage.setItem('phone', phone);

    if (phone) {
      apiCall
        .post('user/register', { phone })
        .then((res) => {
          // TODO
        })
        .catch((err) => {
          console.log('err > ', err);
        });
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (!phone) {
        navigate('/login');
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='w-100 h-100 p-3 d-flex flex-column align-items-center login'>
      <img src={logo} alt='' />
      <div className='w-100'>
        <img src={arrowBack} onClick={() => navigate('/login')} alt='' />
      </div>

      <div className='login-body'>
        <p className='title'>Enter Auth Code</p>
        <div className='text-center'>
          <img src={imgMain} alt='' />
        </div>

        <form noValidate autoComplete='off' className='_dish-textField'>
          <div className=''>
            <p className='lable'>{`Confirmation code sent to ${phone}`}</p>
            <TextField
              autoFocus={true}
              type='tel'
              placeholder='Enter your phone number'
              className=''
              helperText={!isValidOtp ? messageError : ''}
              variant='outlined'
              inputProps={{ maxLength: 11 }}
              error={!isValidOtp}
              onChange={(e) => handlSetOtp(e)}
            />
          </div>
        </form>

        <button className='login-btn' onClick={handleRegister}>
          Continue
        </button>

        {hasTime ? (
          <p className='timer timer-resend' onClick={handleReGetOtp}>
            Resend verification code
          </p>
        ) : (
          <p className='timer'>{`Resend verification code until another ${timer}`}</p>
        )}
      </div>
    </div>
  );
};
export default VerificationCode;
