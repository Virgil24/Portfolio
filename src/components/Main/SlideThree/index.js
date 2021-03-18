/* eslint-disable max-len */
import React from 'react';
import './styles.scss';

const SlideThree = ({ onMouseChangeColor, backgroundColor, onMouseLeftHover, visibility }) => {
  const onHover = () => {
    onMouseChangeColor();
  };
  const leftHover = () => {
    onMouseLeftHover();
  };
  const styles = {
    backgroundColor,
    transition: '3s',
  };
  const containerStyles = {
    visibility,
    transition: '3s',
  };
  return (
    // must be read as :  backgroundColor:backgroundColor
    // just add : onMouseOut={leftHover} on div to get the onlefthover change color
    // <div className="slide__three" onMouseOver={onHover} style={styles}>
    //   <div className="slide__three__skills">
    //     <div className="skills slide__three__skills__front">
    //       <h3> Mes compétences côté Front-end</h3>
    //       <ul>
    //         <li> Réalisation d'interface utilisateur statique et adaptable selon le support : HTML5 CSS3</li>
    //         <li> Création d'application web dynamique grâce au couple de framework Javascript :  React et Redux</li>
    //         <li> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
    //         <li> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
    //       </ul>
    //     </div>
    //     <div className="skills slide__three__skills__back">
    //       <h3> Mes compétences côté Back-end</h3>
    //       <ul>
    //         <li> Création et utilisation d'une base de données : PhpMyAdmin (MariaDB), PostrgreSQL (ORM : Sequelize)</li>
    //         <li> Développer la partie back-end d'une application web, en respectant les principales mesures de sécurité : PHP et Node.js</li>
    //         <li> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
    //         <li> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
    //       </ul>
    //     </div>
    //     <div className="skills slide__three__skills__managment">
    //       <h3> Mes compétences organisationnelles</h3>
    //       <ul>
    //         <li> Rédaction des documents nécessaires à la mise en place d'un projet, maquettage d'une application</li>
    //         <li> Répartition des tâches et utilisation d'un gestionnaire dédié : Github Project, Trello</li>
    //         <li> Versionning de project avec Github, utilisation de branches pour orgagniser le projet. </li>
    //         <li> Méthodologie de travail dite agile, modèle scrum. </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="slide__three" onMouseOver={onHover} style={styles}>
      <div className="introduction">
        <p> <span>Organisé, rigoureux et motivé,</span> Après 5 ans passés à l'étranger pour autant d'années travaillées dans le secture du service client, j'ai choisi d'entamer une reconversion proffessionelle dans le secteur de développement web en Juin 2020 à l'âge de 26 ans. J'ai donc suivi une formation de 5 mois auprès de l'école O'clock, 3 mois de socle, suivi de 1 mois de spécialisation front-end avec React/Redux, puis d'un projet d'équipe en totale autonomie de 1 mois (<a target="_blank" rel="noreferrer" href="https://amanger.com">aManger.com</a>). A la suite de cette formation, j'ai passé la certification (<a href="https://www.opquast.com/certification/" target="_blank" rel="noreferrer">Opquast</a>). </p>
      </div>
      <div className="container" style={containerStyles}>
        <div className="clip clip1">
          <h4>Front-end</h4>
          <div className="content">
            <h3> Mes compétences côté Front-end</h3>
            <ul>
              <li> Réalisation d'interface utilisateur statique et adaptable selon le support : HTML5 CSS3</li>
              <li> Création d'application web dynamique grâce au couple de framework Javascript :  React et Redux</li>
              <li> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
              <li> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
            </ul>
          </div>
        </div>
        <div className="clip clip2">
        <h4>Back-end</h4>
          <div className="content">
            <h3> Mes compétences côté Back-end</h3>
            <ul>
              <li> Création et utilisation d'une base de données : PhpMyAdmin (MariaDB), PostrgreSQL (ORM : Sequelize)</li>
              <li> Développer la partie back-end d'une application web, en respectant les principales mesures de sécurité : PHP et Node.js</li>
              <li> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
              <li> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
            </ul>
          </div>
        </div>
        <div className="clip clip3">
          <h4>Organisation</h4>
          <div className="content">
            <h3> Mes compétences organisationnelles</h3>
            <ul>
              <li> Rédaction des documents nécessaires à la mise en place d'un projet, maquettage d'une application</li>
              <li> Répartition des tâches et utilisation d'un gestionnaire dédié : Github Project, Trello</li>
              <li> Versionning de project avec Github, utilisation de branches pour orgagniser le projet. </li>
              <li> Méthodologie de travail dite agile, modèle scrum. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
