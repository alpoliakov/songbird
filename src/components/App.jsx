import React from 'react';
import cls from './App.module.css';
import { hot, setConfig} from 'react-hot-loader';

setConfig({
  showReactDomPatchNotification: false
})

const App = () => {
  return (
    <div className={cls.box}>Hello Songbird</div>
  )
}

export default hot(module)(App);
