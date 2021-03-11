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
      coucou
    </div>
  );
};

export default SlideThree;
