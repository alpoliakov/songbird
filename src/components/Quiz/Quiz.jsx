import React from "react";
import PropTypes from "prop-types";
import birdImage from "../../assets/images/bird.jpg";
import cls from "./Quiz.module.css"

const Quiz = (props) => {
  const {win} = props;
  return (
    <>
      <div className="quiz">
        <img className={cls.birdImage}
             src={win ? "img" : birdImage}
             alt={win ? "img" : "bird"}/>
        <div>
          <div>
            <h3>{win ? 'Bird winner!' : '******'}</h3>
          </div>
          <div>
            Audio player
          </div>
        </div>
      </div>
    </>
  )
}

Quiz.propTypes = {
  win: PropTypes.bool.isRequired,
};

export default Quiz;