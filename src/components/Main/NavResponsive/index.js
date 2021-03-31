import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavResponsive = ({ handleToggleOnClick, toggle }) => {
  const switchToggleOnClick = () => {
    handleToggleOnClick();
  };
  return (
    <nav>
      {toggle && (
        <nav className="navigation__responsive">
          <div className="navigation__responsive__fakediv" onClick={switchToggleOnClick} />
          <div className="navigation__responsive__items">
            <a href="#presentation" className="navigation__responsive__item" onClick={switchToggleOnClick}>Accueil</a>
            <a href="#projects" className="navigation__responsive__item" onClick={switchToggleOnClick}>Projets</a>
            <a href="#aboutResponsive" className="navigation__responsive__item" onClick={switchToggleOnClick}>Me concernant</a>
            <a href="#contact" className="navigation__responsive__item" onClick={switchToggleOnClick}>Contact</a>
          </div>
        </nav>
      )}
      {!toggle && (
        <a href="#" className="navigation__responsive__item__icon"> <FontAwesomeIcon icon={faBars} onClick={switchToggleOnClick} /></a>
      )}
    </nav>

  );
};

export default NavResponsive;
