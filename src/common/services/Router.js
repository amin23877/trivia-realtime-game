// #routerConfig step1
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/home/Home';
import { Login } from 'components/Login/Login';
import { ConfirmCode } from 'components/Login/ConfirmCode';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<ConfirmCode />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
