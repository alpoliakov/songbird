import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import cls from './Header.module.css';
import testsName from '../../data/tests-name';

const Header = (props) => {
  const { page, totalScore } = props;
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
          {testsName.map((item, index) => {
            return (
              <li className={`page-item ${page === index ? 'active' : ''}`} key={uuid()}>
                <a className="page-link" href="/#">
                  {item}
                </a>
              </li>
            );
          })}
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
