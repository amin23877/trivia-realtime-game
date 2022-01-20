import React, { useEffect, useState } from 'react';

import './QuickPlay.scss';
import { io } from "socket.io-client";
import { SOCKET_BASE_URL } from 'common/values/CORE';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { BASE_URL } from 'common/values/CORE';
const QuickPlay = () => {
  const socketUrl = SOCKET_BASE_URL;
  const baseUrl = BASE_URL;
  const token = localStorage.getItem('token')
    ? `${localStorage.getItem('token')}`
    : null;

  // const socket = io(socketUrl, { transports: ["websocket"] });
  const socket = io.connect(socketUrl, { transports: ["websocket"] });

  const [categories, setCategories] = useState([])
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("auth", { token });
      socket.on("authentication", (e) => {
        localStorage.setItem("quizUp_socketId", e.socketid)
        console.log("auth", e);
      });
    });

    socket.on("doubleGame", (e) => {
      console.log("doubleGame", e);
    });

    socket.on("disconnect", () => {
      console.log("connected");
    });

  }, [])
  const getCategories = async () => {
    console.log('doing')
    let cats = await axios.get(baseUrl + 'category', {
      headers: { Authorization: 'Bearer ' + token },
    });
    console.log(cats.data);
    setCategories(cats.data);
  }

  const testMatch = () => {
    // if (categories.length > 0) {
      console.log(categories.length > 0)
      console.log(categories.length)
      socket.emit("doubleGame", { CategoryId: '61bf3bb99328db0eb516c122'});
    // }

  }
  return <div className='w-100 h-100 quickPlay bg1'>

    <Button onClick={getCategories}>get cat</Button>
    <Button onClick={testMatch}>match test</Button>

  </div>;
};
export default QuickPlay;
