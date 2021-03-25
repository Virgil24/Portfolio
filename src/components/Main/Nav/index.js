import React from 'react';
import './styles.scss';
import { Link } from 'react-scroll';
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
          <a href="#" className="navigation__item">Accueil</a>
          <a href="#" className="navigation__item">Projets</a>
          <a href="#" className="navigation__item">Me concernant</a>

          <Link
            className="navigation__item"
            to="contact"
            smooth
            duration={800}
          >
            Contact
          </Link>
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
        <a href="#" className="navigation__item">Accueil</a>
        <a href="#" className="navigation__item">Projets</a>
        <a href="#" className="navigation__item">Me concernant</a>
        <Link
          className="navigation__item"
          to="contact"
          spy
          smooth
          offset={0}
          duration={800}
        >
          Contact
        </Link>
      </div>
    );
  }
};

export default Nav;
