/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

const slideAbout = ({ launchAnimation, animate }) => {
  const launchAnimationOnMouseOver = () => {
    launchAnimation();
  };
  return (
    <div>
      <div id="about" className="slideAbout" onMouseOver={launchAnimationOnMouseOver}>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title1"> À propos</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image1">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.pexels.com/photos/1840794/pexels-photo-1840794.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="grandcanyon" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content1">
                <h3 className="slideAbout__section__box__contains__contentt__title"> Mon Profil</h3>
                {animate && (
                <Typewriter
                  wrapperClassName="slideAbout__section__box__contains__contentt__text"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Organisé, rigoureux et motivé,')
                      .pauseFor(300)
                      .deleteAll(20)
                      .pasteString('Après 5 ans passés à l\'étranger pour autant d\'années travaillées dans le secteur du service client, j\'ai choisi d\'entamer une reconversion professionelle dans le secteur du développement web en Juin 2020.<br/> J\'ai donc suivi une formation de 5 mois auprès de l\'école O\'clock. J\'ai ensuite intégré une licence Professionnelle option développement web en alternance aurès de l\'entreprise Open Studio')
                      .start();
                  }}
                />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title2"> Front-end</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image2">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="football pitch" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content2">
                <h3 className="slideAbout__section__box__contains__contentt__title"> Mes compétences côté Front-end</h3>
                <ul className="slideAbout__section__box__contains__contentt__list">
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Réalisation d'interfaces utilisateurs responsives, avancées : HTML5 CSS3</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Création d'application web dynamique grâce aux couples de framework Javascript :  React/Redux et Expo/React Native</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Mise en place d'animation et respect de l'accessibilité afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Utilisation de librairies CSS : Tailwind, Semantic UI, Bootsrap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title3"> Back-end</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image3">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMHN0YWRpdW18ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="tennis" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content3">
                <h3 className="slideAbout__section__box__contains__contentt__title"> Mes compétences côté Back-end</h3>
                <ul className="slideAbout__section__box__contains__contentt__list">
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Création et utilisation d'une base de données : PhpMyAdmin (MariaDB), PostrgreSQL</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Utilisation d'Object Mapping Relationnel pour faciliter la communication en base de données (Sequelize, Doctrine)</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Développer la partie back-end d'une application web, en respectant les principales mesures de sécurité : PHP, Symfony et Node.js</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Creation d'API sur le modèle CRUD, prête à être consommée côté client : API Platform</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title4"> Organisation</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image4">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="van" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content4">
                <h3 className="slideAbout__section__box__contains__contentt__title"> Mes compétences organisationnelles</h3>
                <ul className="slideAbout__section__box__contains__contentt__list">
                  <li className="slideAboutResponsive__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Rédaction des documents nécessaires à la mise en place d'un projet, maquettage d'une application (MCD, MLD, Wireframes ...)</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Répartition des tâches et utilisation d'un gestionnaire dédié : Github Project, Trello</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Versionning de projets avec Github, utilisation de branches pour orgagniser le projet. </li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Méthodologie de travail dite agile, modèle scrum. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default slideAbout;
