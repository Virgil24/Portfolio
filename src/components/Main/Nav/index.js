import React from 'react';
import './styles.scss';
import { Link } from 'react-scroll';

const Nav = () => (
  <nav className="navigation">
    <a href="#" className="navigation__item">Accueil</a>
    <a href="#" className="navigation__item">Projets</a>
    <a href="#" className="navigation__item">Compétences</a>
    <a href="#" className="navigation__item">Me concernant</a>
    <Link
      className="navigation__item"
      to="contact"
      spy={true}
      smooth={true}
      offset={0}
      duration={800}
    >
      Contact
    </Link>
  </nav>
);

export default Nav;
