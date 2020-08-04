import React from "react";
import PropTypes from "prop-types";

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
  const {id, name, species, description} = bird;
  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
      <p>{species}</p>
      <p>{description}</p>
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