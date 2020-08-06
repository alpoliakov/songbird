import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import 'moment-duration-format';
import cls from './Bar.module.css'


const Bar = (props) => {

  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  const formatDuration = (time) => {
    return moment
      .duration(time, "seconds")
      .format("mm:ss", { trim: false });
  }

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  const handleTimeDrag = (e) => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className={cls.bar}>
      <span className={cls.barTime}>{formatDuration(curTime)}</span>
      <div
        role='presentation'
        className={`bar__progress ${cls.barProgress}`}
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className={cls.barProgressKnob}
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="bar__time" >{formatDuration(duration)}</span>
    </div>
  )
}

Bar.propTypes = {
  duration: PropTypes.number.isRequired,
  curTime: PropTypes.number.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
}

export default Bar;