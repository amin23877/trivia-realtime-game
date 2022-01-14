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
import Profile from 'pages/profile/Profile';
import Friends from 'pages/friends/Friends';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
        </Route>

        <Route exact path='/profile' element={<ProtectedRoute />}>
          <Route exact path='/profile' element={<Profile />} />
        </Route>

        <Route exact path='/friends' element={<ProtectedRoute />}>
          <Route exact path='/friends' element={<Friends />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<VerificationCode />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
