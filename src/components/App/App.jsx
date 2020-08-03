import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import Header from "../Header/Header";
import GameOver from "../GameOver/GameOver";
import Game from "../Game/Game";
import birdsData from "../../data/birds";

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [page, setPage] = useState(0);
  const [win, setWin] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [birdsList, setBirdsList] = useState([]);

  useEffect(() => {
    setGameOver(false);
    // setWin(true);
    setTotalScore(0);
    setBirdsList(birdsData[page]);
  })

  const changePage = () => {
    if (!win) return;
    let result  = page;
    result += 1;
    if(result > 5) {
      result = 5;
    }
    setPage(result);
    setWin(false);
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
        birdsList={birdsList}
      />}
    </>
  );
};

export default hot(App);
