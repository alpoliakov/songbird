import React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';
import Header from "../Header/Header";
import GameOver from "../GameOver/GameOver";
import Game from "../Game/Game";
import Footer from "../Footer/Footer";

const App = () => {
 const [gameOver, setGameOver] = useState(false);
  return (
      <>
        <Header />
        {gameOver && <GameOver />}
        {!gameOver && <Game /> }
        {!gameOver && <Footer />}
      </>
  )
};

export default hot(App);
