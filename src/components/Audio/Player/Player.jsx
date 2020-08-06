import React from 'react';
import PropTypes from 'prop-types';
import cls from './Player.module.css';
import Button from "../Button/Button";
import Bar from "../Bar/Bar";
import UseAudio from "../UseAudio/UseAudio";
import winAudio from "../../../assets/audio/winAudio.mp3"

const Player = (props) => {
  const {audio, win} = props;
  const { curTime, duration, playing, setPlaying, setClickedTime } = UseAudio();
  return (
    <div className={cls.player}>
      <audio id="audio" src={win ? winAudio : audio} >
        <track default kind="captions" />
        Your browser does not support the <code>audio</code> element.
      </audio>
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
  audio: PropTypes.string.isRequired,
  win: PropTypes.bool.isRequired,
}

export default Player;