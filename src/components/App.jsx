import React from 'react';
import cls from './App.module.css';
import {hot} from 'react-hot-loader/root';

const App = () => {
  return (
    <div className={cls.box}>Hello Songbird</div>
  )
}

export default hot(App);
