import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@material-ui/core';

import ApiCall from 'common/services/ApiCall';

import './Login.scss';
import logo from 'assets/images/logo/logo.svg';
import mainImg from 'assets/images/pics/login-login.svg';

const Login = () => {
  const navigate = useNavigate();

  const apiCall = new ApiCall();

  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [messageError, setMessageError] = useState(
    'Please enter a valid phone number'
  );

  const handleChangePhone = (e) => {
    setPhone(e.target.value);

    const phoneno = /^0\d{10}$/;
    // if (phone.match(phoneno) && e.target.value.length >= 10) {
    if (e.target.value.length >= 10) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };

  const handleGetOtp = () => {
    localStorage.setItem('phone', phone);

    if (phone && isValidPhone) {
      apiCall
        .post('user/register', { phone })
        .then((res) => {
          console.log('res > ', res);
          navigate('/otp');
        })
        .catch((err) => {
          console.log('err > ', err);
        });
    } else {
      // TODO
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      localStorage.clear();
      sessionStorage.clear();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='w-100 h-100 p-3 d-flex flex-column align-items-center login'>
      <img src={logo} />

      <div className='login-body'>
        <p className='title'>Log in</p>
        <div className='text-center'>
          <img src={mainImg} />
        </div>

        <form noValidate autoComplete='off' className='_dish-textField'>
          <div className=''>
            <p className='lable'>Phone Number</p>
            <TextField
              autoFocus={true}
              type='tel'
              placeholder='Enter your phone number'
              className=''
              helperText={
                phone.length > 10 && !isValidPhone ? messageError : ''
              }
              variant='outlined'
              inputProps={{ maxLength: 11 }}
              // value={phone}
              error={phone !== '' && !isValidPhone}
              onChange={(e) => handleChangePhone(e)}
            />
          </div>
        </form>

        <button
          className='login-btn'
          disabled={!isValidPhone}
          onClick={handleGetOtp}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
