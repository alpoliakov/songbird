import React from "react";
import PropTypes from "prop-types";
import Quiz from "../Quiz/Quiz";
import BirdList from "../BirdList/BirdList";
import Bird from "../Bird/Bird";

const Game = (props) => {
  const {changePage, win, birdsList} = props;
  return (
    <div className="gameBox">
      <Quiz win={win}/>
      <BirdList birdsList={birdsList}/>
      <Bird />
      <button type="button"
              className={win ? "btn btnWin" : "btn"}
              onClick={changePage}>
        Next Level
      </button>
    </div>
  )
}

Game.propTypes = {
  changePage: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
  birdsList: PropTypes.shape([]).isRequired,
};

export default Game;