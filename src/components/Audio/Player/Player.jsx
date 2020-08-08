import React from 'react';
import PropTypes from 'prop-types';
import cls from './Player.module.css';
import Button from "../Button/Button";
import Bar from "../Bar/Bar";
import UseAudio from "../UseAudio/UseAudio";
import VolumeControl from "../VolumeControl/VolumeControl";

const Player = (props) => {
  const {win, url} = props;
  const [audioElement, audioProps] = UseAudio(url);
  const {curTime, duration, playing, setPlaying, setClickedTime, setVolume, volume} = audioProps;
  return (
    <div className={`box-player ${cls.player}`}>
      <div className={cls.topPartPlayer}>
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
      <div className={cls.bottomPartPlayer}>
        <VolumeControl
          volume={volume}
          onVolumeUpdate={value => setVolume(value)}
        />
      </div>
    </div>
  )
}

Player.propTypes = {
  win: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
}

export default Player;