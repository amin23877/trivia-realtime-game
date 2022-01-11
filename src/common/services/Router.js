// #routerConfig step1
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

import ProtectedRoute from './ProtectedRouter';

import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import VerificationCode from 'pages/login/VerificationCode';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<VerificationCode />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
