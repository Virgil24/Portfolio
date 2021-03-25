import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SlideProjects = ({ projects }) => (
  <div className="second__slide">
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
