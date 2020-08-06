import React from 'react';
import PropTypes from 'prop-types';
import cls from './Player.module.css';
import Button from "../Button/Button";
import Bar from "../Bar/Bar";
import UseAudio from "../UseAudio/UseAudio";

const Player = (props) => {
  const {win, url} = props;
  const [audioElement, audioProps] = UseAudio(url);
  const {curTime, duration, playing, setPlaying, setClickedTime} = audioProps;
  return (
    <div className={cls.player}>
      {audioElement}
      <Button
        playing={playing}
        setPlaying={setPlaying}
        win={win}
      />
      <Bar
        curTime={curTime}
        duration={duration}
        onTimeUpdate={(time) => setClickedTime(time)}
      />
    </div>
  )
}

Player.propTypes = {
  win: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
}

export default Player;