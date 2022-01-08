// #routerConfig step1
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import ProtectedRoute from './ProtectedRouter';

import Home from 'pages/home/Home';
import { Login } from 'components/Login/Login';
import { ConfirmCode } from 'components/Login/ConfirmCode';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<ConfirmCode />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
