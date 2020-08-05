import React, { useState, useEffect, useLayoutEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from '../Header/Header';
import GameOver from '../GameOver/GameOver';
import Game from '../Game/Game';
import birdsData from '../../data/birds';
import audioWin from '../../assets/audio/win.mp3';
import audioError from '../../assets/audio/error.mp3';

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
  };

  useEffect(() => {
    const over = () => {
      if(page === 5 && win) {
        setGameOver(true);
      }
    }
    over();
    setBirdsList(birdsData[page]);
    setBird(birdsList[birdId - 1]);
  }, [birdsList, page, birdId, win]);

  useLayoutEffect(() => {
    setRandomBird(random(birdsList));
  }, [birdsList]);

  const removeClasses = () => {
    document.querySelectorAll('.lamp').forEach((item) => {
      item.classList.remove('winClass');
      item.classList.remove('errorClass');
    });
  };

  const changePage = () => {
    if (!win) return;
    let result = page;
    result += 1;
    if (result > birdsList.length) {
      result = birdsList.length;
    }
    setPage(result);
    setWin(false);
    setBirdId(0);
    removeClasses();
  };

  const winPlay = () => {
    winAudio.currentTime = 0;
    winAudio.play();
  };

  const errorPlay = () => {
    errorAudio.currentTime = 0;
    errorAudio.play();
  };

  const handlingQuizResponses = (elem) => {
    setBirdId(+elem.id);
    const lampButton = elem.firstChild;
    if (+elem.id === +randomBird.id && !win) {
      setWin(true);
      winPlay();
      lampButton.classList.add('winClass');
      setTotalScore(totalScore + 5);
    } else if (+elem.id !== +randomBird.id && !win) {
      errorPlay();
      lampButton.classList.add('errorClass');
    }
  };

  return (
    <>
      <Header page={page} totalScore={totalScore} />
      {gameOver && <GameOver />}
      {!gameOver && (
        <Game
          changePage={changePage}
          win={win}
          bird={bird}
          birdsList={birdsList}
          randomBird={randomBird}
          handlingQuizResponses={handlingQuizResponses}
        />
      )}
      <audio src={audioWin} id="audioWin">
        <track default kind="captions" />
      </audio>
      <audio src={audioError} id="audioError">
        <track default kind="captions" />
      </audio>
    </>
  );
};

export default hot(App);
