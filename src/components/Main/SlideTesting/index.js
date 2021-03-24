/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React from 'react';
import './styles.scss';
import Typewriter from 'typewriter-effect';

const SlideTesting = ({ launchAnimation, animate }) => {
  const launchAnimationOnMouseOver = () => {
    launchAnimation();
  };
  return (
    <div>
      <div className="slideAbout" onMouseOver={launchAnimationOnMouseOver}>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title1"> À propos</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image1">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.unsplash.com/photo-1514467911470-2b2492c64477?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW91dGFpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="mountainpic" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content1">
                {animate && (
                <Typewriter
                  wrapperClassName="content__text"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Organisé, rigoureux et motivé,')
                      .pauseFor(500)
                      .deleteAll(20)
                      .pasteString('Après 5 ans passés à l\'étranger pour autant d\'années travaillées dans le secture du service client, j\'ai choisi d\'entamer une reconversion proffessionelle dans le secteur de développement web en Juin 2020 à l\'âge de 26 ans. J\'ai donc suivi une formation de 5 mois auprès de l\'école O\'clock, 3 mois de socle, suivi de 1 mois de spécialisation front-end avec React/Redux, puis d\'un projet d\'équipe en totale autonomie de 1 mois (<a target="_blank" rel="noreferrer" href="https://amanger.com">aManger.com</a>). A la suite de cette formation, j\'ai passé la certification <a href="https://www.opquast.com/certification/" target="_blank" rel="noreferrer">Opquast')
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
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.unsplash.com/photo-1494768788897-7fdaa00de2a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="iceberg" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content2">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laudantium voluptatibus aspernatur, voluptates excepturi quis minima harum odit molestiae minus voluptatum mollitia ea, quae quidem doloribus assumenda dolore expedita qui?</p>
              </div>
            </div>
          </div>
        </section>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title3"> Back-end</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image3">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.unsplash.com/photo-1487766036723-04aebf785670?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="iceberg" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content3">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laudantium voluptatibus aspernatur, voluptates excepturi quis minima harum odit molestiae minus voluptatum mollitia ea, quae quidem doloribus assumenda dolore expedita qui?</p>
              </div>
            </div>
          </div>
        </section>
        <section className="slideAbout__section">
          <h2 className="slideAbout__section__title slideAbout__section__title4"> Organisation</h2>
          <div className="slideAbout__section__box">
            <div className="slideAbout__section__box__contains">
              <div className="slideAbout__section__box__contains__imgBx slideAbout__section__box__contains__image4">
                <img className="slideAbout__section__box__contains__imgBx__pic" src="https://images.unsplash.com/photo-1487766036723-04aebf785670?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="iceberg" />
              </div>
              <div className="slideAbout__section__box__contains__contentt slideAbout__section__box__contains__content4">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laudantium voluptatibus aspernatur, voluptates excepturi quis minima harum odit molestiae minus voluptatum mollitia ea, quae quidem doloribus assumenda dolore expedita qui?</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlideTesting;
