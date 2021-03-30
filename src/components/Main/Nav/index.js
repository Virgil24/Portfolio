import React from 'react';
import './styles.scss';

const Nav = () => (
  <nav className="navigation">
    <div className="navigation__marker" />
    <a href="#presentation" className="navigation__item">Accueil</a>
    <a href="#projects" className="navigation__item">Projets</a>
    <a href="#about" className="navigation__item">Me concernant</a>
    <a href="#contact" className="navigation__item">Contact</a>
  </nav>
);

export default Nav;
