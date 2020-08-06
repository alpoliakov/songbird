import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import cls from './Bird.module.css';
import imageURL from '../../assets/URLs/imageURL';

const StartPage = () => {
  return (
    <>
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка.</p>
    </>
  );
};

const CardBird = (props) => {
  const { bird } = props;
  const { image, name, species, description } = bird;
  const [imageBird, setImageBird] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(`${imageURL}${species}`,);
        setImageBird(result.data.photos.photo[2].url_m);
      } catch (error) {
        setIsError(false);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {};
  }, [species])
  return (
    <>
      <div className={cls.topCardBird}>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <img className="birdImage" src={image} alt={species} /> :
          <img className="birdImage" src={imageBird} alt={species} />}
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
  );
};

CardBird.propTypes = {
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const Bird = (props) => {
  const { bird } = props;
  return (
    <>
      <div className="bird">{!bird ? <StartPage /> : <CardBird bird={bird} />}</div>
    </>
  );
};

export default Bird;

Bird.propTypes = {
  bird: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
