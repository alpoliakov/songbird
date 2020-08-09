import React from 'react';
import PropTypes from 'prop-types';
import winImage from '../../assets/images/win.jpg';

const GameOver = (props) => {
  const { totalScore, newGame } = props;

  const tryPlayAgain = () => {
    newGame();
  };

  return (
    <>
      <div className="gameOver">
        <h1 className="congrats">Поздравляем!</h1>
        <p className="win-text">
          Вы прошли викторину и набрали {totalScore} из 30 возможных баллов
        </p>
        <hr className="win-line" />
        {totalScore < 30 ? (
          <button onClick={tryPlayAgain} type="button" className="btn-again" aria-label="Try Again">
            Попробовать еще раз
          </button>
        ) : (
          <picture>
            <img className="win-image" src={winImage} alt="Bird" />
          </picture>
        )}
      </div>
    </>
  );
};

export default GameOver;

GameOver.propTypes = {
  totalScore: PropTypes.number.isRequired,
  newGame: PropTypes.func.isRequired,
};
