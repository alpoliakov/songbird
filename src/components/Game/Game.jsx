import React from "react";
import PropTypes from "prop-types";
import Quiz from "../Quiz/Quiz";
import BirdList from "../BirdList/BirdList";
import Bird from "../Bird/Bird";

const Game = (props) => {
  const {changePage, win, birdsList, responseProcessing, bird} = props;
  return (
    <>
      <div className="gameBox">
        <Quiz win={win} />
        <BirdList
          birdsList={birdsList}
          responseProcessing={responseProcessing}
        />
        <Bird
          bird={bird}
        />
        <button type="button" className={win ? 'btn btnWin' : 'btn'} onClick={changePage}>
          Next Level
        </button>
      </div>
    </>
  );
}

Game.propTypes = {
  changePage: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
  birdsList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  responseProcessing: PropTypes.func.isRequired,
  bird: PropTypes.shape({}).isRequired,
};

export default Game;