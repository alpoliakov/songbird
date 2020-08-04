import React from "react";
import PropTypes from "prop-types";
import cls from "./BirdList.module.css"

const BirdList = (props) => {
  const {birdsList, choiceBird} = props;

  const handlerBird = () => {
      choiceBird();
  }

  return (
    <>
      <div className="birdList">
        <ul className={cls.birdsGroup}>
          {birdsList.map(bird => <li
            key={bird.id}
            className={cls.bird}
            role='presentation'
            onClick={handlerBird}
          ><span className={cls.lamp} />{bird.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default BirdList;

BirdList.propTypes = {
  birdsList: PropTypes.shape([]).isRequired,
  choiceBird: PropTypes.func.isRequired,
}