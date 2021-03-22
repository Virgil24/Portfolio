/* eslint-disable max-len */
import React from 'react';
import './styles.scss';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SlideTest = ({ launchAnimation, animate }) => {
  const launchAnimationOnMouseOver = () => {
    launchAnimation();
  };
  return (
    <div className="slideTest" onMouseOver={launchAnimationOnMouseOver}>
      <div className="slideTest__cards">
        <div className="slideTest__cards__container slideTest__cards__container1">
          <h3 className="slideTest__cards__container__title">Profil</h3>
          {animate && (
          <Typewriter
            className="slideTest__cards__container__list"
            onInit={(typewriter) => {
              typewriter
                .typeString('Organisé, rigoureux et motivé,')
                .pauseFor(1000)
                .deleteAll(50)
                .pasteString('Après 5 ans passés à l\'étranger pour autant d\'années travaillées dans le secture du service client, j\'ai choisi d\'entamer une reconversion proffessionelle dans le secteur de développement web en Juin 2020 à l\'âge de 26 ans. J\'ai donc suivi une formation de 5 mois auprès de l\'école O\'clock, 3 mois de socle, suivi de 1 mois de spécialisation front-end avec React/Redux, puis d\'un projet d\'équipe en totale autonomie de 1 mois (<a target="_blank" rel="noreferrer" href="https://amanger.com">aManger.com</a>). A la suite de cette formation, j\'ai passé la certification <a href="https://www.opquast.com/certification/" target="_blank" rel="noreferrer">Opquast')
                .start();
            }}
          />
          )}
        </div>
        <div className="slideTest__cards__container slideTest__cards__container2" data-aos="fade-in">
          <h3 className="slideTest__cards__container__title">Front-end</h3>
          <ul className="slideTest__cards__container__list">
            <li className="slideTest__cards__container__item"> Réalisation d'interface utilisateur statique et adaptable selon le support : HTML5 CSS3</li>
            <li className="slideTest__cards__container__item"> Création d'application web dynamique grâce au couple de framework Javascript :  React et Redux</li>
            <li className="slideTest__cards__container__item"> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
            <li className="slideTest__cards__container__item"> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
          </ul>
        </div>
        <div className="slideTest__cards__container slideTest__cards__container3">
          <h3 className="slideTest__cards__container__title"> Back-end</h3>
          <ul className="slideTest__cards__container__list">
            <li className="slideTest__cards__container__item"> Création et utilisation d'une base de données : PhpMyAdmin (MariaDB), PostrgreSQL (ORM : Sequelize)</li>
            <li className="slideTest__cards__container__item"> Développer la partie back-end d'une application web, en respectant les principales mesures de sécurité : PHP et Node.js</li>
            <li className="slideTest__cards__container__item"> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
            <li className="slideTest__cards__container__item"> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
          </ul>
        </div>
        <div className="slideTest__cards__container slideTest__cards__container4">
          <h3 className="slideTest__cards__container__title">Organisation</h3>
          <ul className="slideTest__cards__container__list">
            <li className="slideTest__cards__container__item"> Rédaction des documents nécessaires à la mise en place d'un projet, maquettage d'une application</li>
            <li className="slideTest__cards__container__item"> Répartition des tâches et utilisation d'un gestionnaire dédié : Github Project, Trello</li>
            <li className="slideTest__cards__container__item"> Versionning de project avec Github, utilisation de branches pour orgagniser le projet. </li>
            <li className="slideTest__cards__container__item"> Méthodologie de travail dite agile, modèle scrum. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideTest;
