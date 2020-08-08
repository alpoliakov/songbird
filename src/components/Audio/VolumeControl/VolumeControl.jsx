import React from 'react';
import PropTypes from 'prop-types';
import cls from './VolumeControl.module.css'

const VolumeControl = (props) => {
  const {volume, onVolumeUpdate} = props;
  const volumeRange = Math.floor(volume * 100);
  const changeVolume = (event) => {
    onVolumeUpdate(event.target.valueAsNumber)
  }

  return (
    <div className={cls.boxVolume}>
      <span className='iconVolume' />
      <input
        id="volume"
        type='range'
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={changeVolume}
        width='100%'
      />
      <span className={cls.num}>{volumeRange}</span>
    </div>
  )
}

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  onVolumeUpdate: PropTypes.func.isRequired
}

export  default  VolumeControl;