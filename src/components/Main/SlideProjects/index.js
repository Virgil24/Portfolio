import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

const SlideProjects = ({ projects }) => (
  <div className="second__slide" id="projects">
    <h2 className="second__slide__title">Mes projets</h2>
    {projects.map((project) => (
      <div className="second__slide__card" key={project.id}>
        <img className="second__slide__card__image" src={project.picture} alt="amanger" />
        <div className="second__slide__card__content">
          <h2 className="second__slide__card__content__title"> {project.title}</h2>
          <p className="second__slide__card__content__text">  {project.description}</p>
          <div className="second__slide__card__content__stack">
            <p> Techno front-end : {project.stackFront} </p>
            <p> Techno back-end : {project.stackBack} </p>
          </div>
          <div className="second__slide__card__content__link">
            <p> <a href={project.website} target="_blank" rel="noreferrer">Voir le site : <FontAwesomeIcon icon={faGlobe} /> </a></p>
            <p> <a href={project.github} target="_blank" rel="noreferrer">Code source : <FontAwesomeIcon icon={faCode} /></a></p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

SlideProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      stackFront: PropTypes.string,
      stackBack: PropTypes.string,
      picture: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
export default SlideProjects;
