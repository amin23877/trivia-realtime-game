import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ApiCall from 'common/services/ApiCall';

import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const apiCall = new ApiCall();

  const handleGetOtp = () => {
    localStorage.setItem('phone', 'state.formData.phone_number');

    apiCall
      .post('user/register', { phone: 'state.formData.phone_number' })
      .then((res) => {
        console.log('res > ', res);
        navigate('/otp');
      })
      .catch((err) => {
        console.log('err > ', err);
      });
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
      <div className=''>Login</div>
    </div>
  );
};
export default Login;
