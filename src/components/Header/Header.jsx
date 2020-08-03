import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import cls from './Header.module.css';


const Header = (props) => {
  const {page, totalScore} = props;
  useEffect(() => {
    const li = document.querySelectorAll('.page-item');
    li.forEach((elem, index) => {
      elem.classList.remove('active');
      if(index === page) {
        elem.classList.add('active');
      }
    })
  })
  return (
    <>
      <div className={`header ${cls.header}`}>
        <div className="headerTop">
          <div className="logo" />
          <h5>
            Score: <span className="score">{totalScore}</span>
          </h5>
        </div>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="/#">
              Разминка
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="/#">
              Воробьиные
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              Лесные птицы
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              Певчие птицы
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              Хищные птицы
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              Морские птицы
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

Header.propTypes = {
  page: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
};

export default Header;
