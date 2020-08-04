import React, {useState, useEffect, useLayoutEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import Header from "../Header/Header";
import GameOver from "../GameOver/GameOver";
import Game from "../Game/Game";
import birdsData from "../../data/birds";
import audioWin from "../../assets/audio/win.mp3";
import audioError from "../../assets/audio/error.mp3"

const App = () => {

  const [gameOver, setGameOver] = useState(false);
  const [page, setPage] = useState(0);
  const [win, setWin] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [birdsList, setBirdsList] = useState(birdsData[page]);
  const [birdId, setBirdId] = useState(0);
  const [bird, setBird] = useState({});
  const [randomBird, setRandomBird] = useState({});

  const errorAudio = document.getElementById('audioError');
  const winAudio = document.getElementById('audioWin');

  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  useEffect(() => {
    setGameOver(false);
    setTotalScore(0);
    setBirdsList(birdsData[page]);
    setBird(birdsList[birdId - 1]);
  }, [birdsList, page, birdId])

  useLayoutEffect(() => {
    setRandomBird(random(birdsList));
  }, [birdsList])

  const changePage = () => {
    if (!win) return;
    let result  = page;
    result += 1;
    if(result > 5) {
      result = 5;
    }
    setPage(result);
    setWin(false);
    setBirdId(0);
  }

  const effectAudio = () => {
    if(win) {
      winAudio.currentTime = 0;
      winAudio.play();
    }else {
      errorAudio.currentTime = 0;
      errorAudio.play();
    }
  }

  const handlingQuizResponses = (elem) => {
    setBirdId(+elem.id);
    setWin(true);
    effectAudio();
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
        bird={bird}
        birdsList={birdsList}
        randomBird={randomBird}
        handlingQuizResponses={handlingQuizResponses}
      />}
      <audio src={audioWin} id="audioWin" >
        <track default kind="captions" />
      </audio>
      <audio src={audioError} id="audioError" >
        <track default kind="captions" />
      </audio>
    </>
  );
};

export default hot(App);
