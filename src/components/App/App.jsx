import React, { useState, useEffect, useLayoutEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import useSound from 'use-sound';
import Header from '../Header/Header';
import GameOver from '../GameOver/GameOver';
import Game from '../Game/Game';
import birdsData from '../../data/birds';
import audioWin from '../../assets/audio/winAudio.mp3';
import audioError from '../../assets/audio/error.mp3';
import surprise from '../../assets/audio/siurpriz.mp3';

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [page, setPage] = useState(0);
  const [win, setWin] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [birdsList, setBirdsList] = useState(birdsData[page]);
  const [birdId, setBirdId] = useState(0);
  const [bird, setBird] = useState({});
  const [randomBird, setRandomBird] = useState({});
  const [score, setScore] = useState(5);
  const [play, { stop }] = useSound(surprise);
  const [playWin] = useSound(audioWin);
  const [playError] = useSound(audioError);
  const step = 1;

  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const congrats = () => {
    if (totalScore < 30) {
      playWin();
      return;
    }
    play();
  };

  useEffect(() => {
    if (page === birdsList.length && win) {
      setGameOver(true);
      setPage(0);
      congrats();
    }
    if (page < birdsList.length) {
      setBirdsList(birdsData[page]);
    }
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
    if (page >= birdsList.length - step) {
      setPage(birdsList.length);
      return;
    }
    setPage(page + step);
    setWin(false);
    setBirdId(0);
    removeClasses();
  };

  const handlingQuizResponses = (elem) => {
    setBirdId(+elem.id);
    const lampButton = elem.firstChild;
    if (+elem.id === +randomBird.id && !win) {
      setWin(true);
      playWin();
      lampButton.classList.add('winClass');
      setTotalScore(totalScore + score);
      setScore(5);
    } else if (+elem.id !== +randomBird.id && !win) {
      playError();
      lampButton.classList.add('errorClass');
      setScore(score - step);
    }
  };

  const newGame = () => {
    setGameOver(false);
    setBirdsList(birdsData[page]);
    setWin(false);
    setTotalScore(0);
    setBirdId(0);
    stop();
  };

  return (
    <>
      <Header page={page} totalScore={totalScore} />
      {gameOver && <GameOver totalScore={totalScore} newGame={newGame} />}
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
    </>
  );
};

export default hot(App);
