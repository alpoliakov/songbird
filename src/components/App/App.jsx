import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import Header from "../Header/Header";
import GameOver from "../GameOver/GameOver";
import Game from "../Game/Game";

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [page, setPage] = useState(0);
  const [win, setWin] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setGameOver(false);
    setWin(false);
    setTotalScore(5);
  })

  const changePage = () => {
    if (!win) return;
    let result  = page;
    result += 1;
    if(result > 5) {
      result = 5;
    }
    setPage(result);
  }

  return (
    <>
      <Header
        page={page}
        totalScore={totalScore}
      />
      {gameOver && <GameOver />}
      {!gameOver && <Game
        changePage={changePage}
        win={win}
      />}
    </>
  );
};

export default hot(App);
