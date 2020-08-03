import React from "react";
import PropTypes from "prop-types";

const BirdList = (props) => {
  const {birdsList} = props;
  return (
    <>
      <div className="birdList">
        <ul>
          {birdsList.map(bird => <li key={bird.id}>{bird.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default BirdList;

BirdList.propTypes = {
  birdsList: PropTypes.shape([]).isRequired,
}