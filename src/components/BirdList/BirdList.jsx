import React from 'react';
import PropTypes from 'prop-types';
import cls from './BirdList.module.css';

const BirdList = (props) => {
  const { birdsList, handlingQuizResponses } = props;

  const handlerBird = (event) => {
    const elem = event.target;
    handlingQuizResponses(elem);
  };

  return (
    <>
      <div className="birdList">
        <ul className={cls.birdsGroup}>
          {birdsList.map(({ id, name }) => (
            <li key={id} id={id} className={cls.bird} role="presentation" onClick={handlerBird}>
              <span className="lamp" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BirdList;

BirdList.propTypes = {
  birdsList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  handlingQuizResponses: PropTypes.func.isRequired,
};
