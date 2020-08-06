import React from 'react';
import PropTypes from 'prop-types';
import birdImage from '../../assets/images/bird.jpg';
import cls from './Quiz.module.css';
import Player from "../Audio/Player/Player";

const Quiz = (props) => {
  const {
    win,
    randomBird: { name, image, audio},
  } = props;

  return (
    <>
      <div className="quiz">
        <img className="birdImage" src={win ? image : birdImage} alt={win ? image : 'bird'} />
        <div className={cls.quizeRight}>
          <div className={cls.quizeRightName}>
            <h3>{win ? name : '******'}</h3>
          </div>
          <Player
            win={win}
            audio = {audio}
          />
        </div>
      </div>
    </>
  );
};

Quiz.propTypes = {
  win: PropTypes.bool.isRequired,
  randomBird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default Quiz;
