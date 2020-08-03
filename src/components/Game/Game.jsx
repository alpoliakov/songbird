import React from "react";
import PropTypes from "prop-types";
import Quiz from "../Quiz/Quiz";
import BirdList from "../BirdList/BirdList";
import Bird from "../Bird/Bird";

const Game = (props) => {

  const {changePage, win} = props;
  return (
    <div className="gameBox">
      <Quiz win={win}/>
      <BirdList />
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
};

Game.propTypes = {
  win: PropTypes.bool.isRequired,
};

export default Game;