import React from 'react';
import PropTypes from 'prop-types';
import cls from './Bird.module.css';
import Player from '../Audio/Player/Player';
import winAudio from '../../assets/audio/winAudio.mp3';

const StartPage = () => {
  return (
    <>
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка.</p>
    </>
  );
};

const CardBird = (props) => {
  const { bird, win } = props;
  const { image, name, species, description } = bird;

  return (
    <>
      <div className={cls.topCardBird}>
        <img className={`birdImage ${cls.birdImage}`} src={image} alt={species} />
        <div className={cls.cardInfoBird}>
          <h4 className={cls.name}>{name}</h4>
          <p className={`${cls.name} ${cls.nameLatin}`}>{species}</p>
          <Player url={win ? winAudio : bird.audio} />
        </div>
      </div>
      <div className={cls.textBox}>
        <p>{description}</p>
      </div>
    </>
  );
};

CardBird.propTypes = {
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  win: PropTypes.bool.isRequired,
};

const Bird = (props) => {
  const { bird, win } = props;
  return (
    <>
      <div className="bird">{!bird ? <StartPage /> : <CardBird bird={bird} win={win} />}</div>
    </>
  );
};

export default Bird;

Bird.propTypes = {
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  win: PropTypes.bool.isRequired,
};
