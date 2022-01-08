import React, { useEffect, useState } from 'react';

import ApiCall from 'common/services/ApiCall';

import './Login.scss';
import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
  const navigate = useNavigate();

  const apiCall = new ApiCall();

  const [otp, setOtp] = useState();

  const handlSetOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleRegister = () => {
    let phone = localStorage.getItem('phone');
    if (phone) {
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

          console.log(res);
          navigate('/');
        })
        .catch((err) => {
          console.log('err > ', err);
          localStorage.removeItem('token');
        });
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='w-100 h-100 login br2'>
      <div className=''>VerificationCode</div>
    </div>
  );
};
export default VerificationCode;
