import React from 'react';
import PropTypes from 'prop-types';
import birdImage from '../../assets/images/bird.jpg';
import cls from './Quiz.module.css';
import Player from '../Audio/Player/Player';
import winAudio from '../../assets/audio/winAudio.mp3';

const Quiz = (props) => {
  const { win, randomBird } = props;

  return (
    <>
      <div className="quiz">
        <picture>
          <img className="birdImage" src={win ? randomBird.image : birdImage} alt="bird" />
        </picture>
        <div className={cls.quizeRight}>
          <div className={cls.quizeRightName}>
            <h3>{win ? randomBird.name : '******'}</h3>
          </div>
          <Player win={win} url={win ? winAudio : randomBird.audio} />
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
