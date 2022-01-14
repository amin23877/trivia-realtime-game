// #routerConfig step1
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

import ProtectedRoute from './ProtectedRouter';

import Menu from 'pages/menu/Menu';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import Friends from 'pages/friends/Friends';
import Leagues from 'pages/leagues/Leagues';
import VerificationCode from 'pages/login/VerificationCode';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
        </Route>

        <Route exact path='/menu' element={<ProtectedRoute />}>
          <Route exact path='/menu' element={<Menu />} />
        </Route>

        <Route exact path='/friends' element={<ProtectedRoute />}>
          <Route exact path='/friends' element={<Friends />} />
        </Route>

        <Route exact path='/leagues' element={<ProtectedRoute />}>
          <Route exact path='/leagues' element={<Leagues />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<VerificationCode />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
