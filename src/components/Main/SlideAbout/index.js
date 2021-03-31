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
      <div id="about" className="slideAbout"  onMouseOver={launchAnimationOnMouseOver}>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title1"> À propos</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image1">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.pexels.com/photos/1840794/pexels-photo-1840794.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="grandcanyon" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content1">
                <h3 className="slideAbout__section__box__contains__contentt__title" > Mon Profil</h3>
                {animate && (
                <Typewriter
                  wrapperClassName="slideAbout__section__box__contains__contentt__text"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Organisé, rigoureux et motivé,')
                      .pauseFor(500)
                      .deleteAll(20)
                      .pasteString('Après 5 ans passés à l\'étranger pour autant d\'années travaillées dans le secteur du service client, j\'ai choisi d\'entamer une reconversion proffessionelle dans le secteur de développement web en Juin 2020 à l\'âge de 26 ans. J\'ai donc suivi une formation de 5 mois auprès de l\'école O\'clock, 3 mois de socle, suivi de 1 mois de spécialisation front-end avec React/Redux, puis d\'un projet d\'équipe en totale autonomie de 1 mois. (<a target="_blank" rel="noreferrer" href="https://amanger.com">aManger.com</a>). A la suite de cette formation, j\'ai passé la certification <a target="_blank" rel="noreferrer"  href="https://www.opquast.com/certification/" target="_blank" rel="noreferrer">Opquast </a> (score : 875/1000), puis mon Titre Proffessionnel RNCP niveau 5 (équivalent BAC+2). <br/> Aujourd\'hui, je poursuis mon apprentissage de React/Redux, et j\'apprends PHP afin d\'étendre mes compétences et pour répondre aux prérequis de la licence proffessionnelle que je souhaite intégrer : <a href="https://iut.uca.fr/formations/lp-metiers-du-numerique-conception-redaction-et-realisation-web">conception, rédaction et réalisation web </a>')
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
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Réalisation d'interface utilisateur statique et adaptable selon le support : HTML5 CSS3</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Création d'application web dynamique grâce au couple de framework Javascript :  React et Redux</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
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
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.pexels.com/photos/5740516/pexels-photo-5740516.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="tennis" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content3">
                <h3 className="slideAbout__section__box__contains__contentt__title"> Mes compétences côté Back-end</h3>
                <ul className="slideAbout__section__box__contains__contentt__list">
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Création et utilisation d'une base de données : PhpMyAdmin (MariaDB), PostrgreSQL (ORM : Sequelize)</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Développer la partie back-end d'une application web, en respectant les principales mesures de sécurité : PHP et Node.js</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Mise en place d'animation afin d'améliorer l'expérience utilisateur : Sass et Javascript</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Utilisation de librairies CSS, lorsque les délais de réalisations de projets sont réduits : Semantic UI, Bootsrap</li>
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
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Rédaction des documents nécessaires à la mise en place d'un projet, maquettage d'une application</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Répartition des tâches et utilisation d'un gestionnaire dédié : Github Project, Trello</li>
                  <li className="slideAbout__section__box__contains__contentt__list__item"> <FontAwesomeIcon icon={faAngleRight} /> Versionning de project avec Github, utilisation de branches pour orgagniser le projet. </li>
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
