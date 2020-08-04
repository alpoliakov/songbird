import React from "react";
import PropTypes from "prop-types";
import cls from "./Bird.module.css";

const StartPage = () => {
  return (
    <>
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка.</p>
    </>
  )
}

const CardBird = (props) => {
  const { bird } = props;
  const {image, name, species, description} = bird;
  return (
    <>
      <div className={cls.topCardBird}>
        <img className='birdImage' src={image} alt={name} />
        <div className={cls.cardInfoBird}>
          <h4 className={cls.name}>{name}</h4>
          <p className={`${cls.name} ${cls.nameLatin}`}>{species}</p>
          <p>Audio</p>
        </div>
      </div>
      <div className={cls.textBox}>
        <p>{description}</p>
      </div>
    </>
  )
}

CardBird.propTypes = {
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
}

const Bird = (props) => {
  const {bird} = props;
  return (
    <>
      <div className="bird">
        {!bird ? <StartPage /> : <CardBird bird={bird} />}
      </div>
    </>
  )
}

export default Bird;

Bird.propTypes = {
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
}