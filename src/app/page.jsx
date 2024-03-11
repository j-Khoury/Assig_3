'use client'
import React from 'react'
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Task from '@/screens/home'
import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
  

  return (
    <>
    <Provider store={store}>
      <Task />
    </Provider>
    </>
  );
};

export default Home;
