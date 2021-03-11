import React from 'react';
import './styles.scss';

const SlideTwo = ({ projects }) => (
  <div className="second__slide">
    {projects.map((project) => (
      <div className="second__slide__card">
        <img className="second__slide__card__image" src={project.picture} alt="amanger" />
        <div className="second__slide__card__content">
          <h2 className="second__slide__card__content__title">{project.title}</h2>
          <p className="second__slide__card__content__text">{project.description}</p>
          <p className="second__slide__card__content__text">{project.stackFront} / {project.stackBack}</p>
        </div>
      </div>
    ))}
  </div>
);

export default SlideTwo;
