import React from 'react';
import PropTypes from 'prop-types';
import Quiz from '../Quiz/Quiz';
import BirdList from '../BirdList/BirdList';
import Bird from '../Bird/Bird';

const Game = (props) => {
  const { changePage, win, birdsList, handlingQuizResponses, bird, randomBird } = props;
  return (
    <>
      <div className="gameBox">
        <Quiz win={win} randomBird={randomBird} />
        <BirdList birdsList={birdsList} handlingQuizResponses={handlingQuizResponses} />
        <Bird bird={bird} win={win} />
        <button type="button" className={win ? 'btn btnWin' : 'btn'} onClick={changePage}>
          Next Level
        </button>
      </div>
    </>
  );
};

Game.propTypes = {
  changePage: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
  birdsList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  handlingQuizResponses: PropTypes.func.isRequired,
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  randomBird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default Game;
