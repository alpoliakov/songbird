import React from 'react';
import { hot } from 'react-hot-loader/root';
import cls from './App.module.css';

const App = () => {
  return <div className={cls.box}>Hello Songbird</div>;
};

export default hot(App);
