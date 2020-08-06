import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import cls from './Button.module.css';

const Button = (props) => {
  const size=60;
  const iconColor="hsl(0deg, 0%, 100%)";
  const idleBackgroundColor='rgb(0 124 93)';
  const activeBackgroundColor='rgb(0 188 140)';

  const {playing, setPlaying, win} = props;
  const changeState = () => {
    setPlaying(!playing);
  }

  useEffect(() => {
    if(win || !playing) {
      setPlaying(false);
    }
  }, [win])

  const triangle = "22.1999902139707,17.0000097860293 22.1999902139707,42.999990213970705 44.29998532095605,30.000039144117192 44.29998532095605,29.999960855882808";
  const square = "19.600000228218757,19.599999771781246 19.600000228218757,40.40000022821875 40.400000342328134,40.399999087124975 40.400000342328134,19.600000912875025";

  return (
    <div>
      <button
        type='button'
        onClick={changeState}
        className={cls.playButton}
      >
        <svg width={size} height={size}>
          <circle cx="30" cy="30" r="30" fill={playing ? activeBackgroundColor : idleBackgroundColor} style={{cursor: "pointer"}} />
          <polygon
            points={playing ? square : triangle}
            fill={iconColor} style={{cursor: "pointer"}} />
        </svg>
      </button>
    </div>
  )
}

Button.propTypes = {
  playing: PropTypes.bool.isRequired,
  setPlaying: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
}

export default Button;