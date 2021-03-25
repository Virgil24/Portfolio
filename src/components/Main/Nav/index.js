import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ handleToggleOnClick, toggle }) => {
  const switchToggleOnClick = () => {
    handleToggleOnClick();
  };
  const checkWindowSize = window.matchMedia('(max-width: 768px)');
  // if the device size is over ipad do not display toggle menu
  if (checkWindowSize.matches === true) {
    return (
      <nav>
        {toggle && (
        <nav className="navigation">
          <div className="navigation__marker" />
          <a href="#" className="navigation__item__icon"><FontAwesomeIcon icon={faTimesCircle} onClick={switchToggleOnClick} /></a>
          <a href="#presentation" className="navigation__item">Accueil</a>
          <a href="#projects" className="navigation__item">Projets</a>
          <a href="#about" className="navigation__item">Me concernant</a>
          <a href="#contact" className="navigation__item">Contact</a>
        </nav>
        )}
        {!toggle && (
        <a href="#" className="navigation__item__icon"> <FontAwesomeIcon icon={faChevronCircleDown} onClick={switchToggleOnClick} /></a>
        )}
      </nav>

    );
    // if the device size is under ipad display toggle menu
  } if (checkWindowSize.matches === false) {
    return (
      <div className="navigation">
        <a href="#presentation" className="navigation__item">Accueil</a>
        <a href="#projects" className="navigation__item">Projets</a>
        <a href="#about" className="navigation__item">Me concernant</a>
        <a href="#contact" className="navigation__item">Contact</a>

      </div>
    );
  }
};

export default Nav;
