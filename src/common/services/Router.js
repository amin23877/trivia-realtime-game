import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/home/Home';
import { Login } from 'components/Login/Login';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
