/* eslint-disable max-len */
import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SlideThree = ({ fetchLigueData }) => {
  useEffect(() => {
    fetchLigueData();
  }, []);
  return (
    <div className="slide__three">
      <div className="slide__three__container">
        <div>
          <div className="slide__three__container__box">
            <div className="slide__three__container__box__cube"> </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default SlideThree;
