import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-duration-format';
import cls from './Bar.module.css';

const Bar = (props) => {
  const barRef = useRef(null);
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  const formatDuration = (time) => {
    return moment.duration(time, 'seconds').format('mm:ss', { trim: false });
  };

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = barRef.current;
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (e) => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  return (
    <div className={cls.bar}>
      <div
        ref={barRef}
        role="presentation"
        className={`bar__progress ${cls.barProgress}`}
        style={{
          background: `linear-gradient(to right, orange ${curPercentage - 0.05}%, white 0)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span className={cls.barProgressKnob} style={{ left: `${curPercentage}%` }} />
      </div>
      <div className={cls.boxTimer}>
        <span className={cls.barTime}>{formatDuration(curTime)}</span>
        <span className={cls.barTime}>{formatDuration(duration)}</span>
      </div>
    </div>
  );
};

Bar.propTypes = {
  duration: PropTypes.number.isRequired,
  curTime: PropTypes.number.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
};

export default Bar;
