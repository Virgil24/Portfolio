import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import virgil from './virgilfinal.png';

const SlidePresentation = () => (
  <div id="first__slide" className="slide__one" id="presentation">
    <h1 className="slide__one__presentation">Virgil Kwiatkowski</h1>
    <h2 className="slide__one__presentation__subtitle">Developpeur Web FullStack Junior</h2>
    <div className="slide__one__container nohover">
      <div className="slide__one__container__card">
        <div className="slide__one__container__card__circle" />
        <div className="slide__one__container__card__content">
          <h3 className="slide__one__container__card__content__title">Bienvenue sur mon Portfolio</h3>
          <p className="slide__one__container__card__content__text">Je m'appelle Virgil, j'ai 27 ans, j'habite en haute-loire, au Puy-en-Velay.</p>
          <p className="slide__one__container__card__content__text">Les présentations étants faites, je vous laisse découvrir mon profil, qui je l'espère saura attirer votre attention.</p>
          <a className="slide__one__container__card__content__button" href="#contact"> Contactez-moi</a>
        </div>
        <img className="slide__one__container__card__picture" src={virgil} alt="ownPicture" />
      </div>
    </div>
    <div
      className="slide__one__presentation__scroll"
    >Scroll <FontAwesomeIcon icon={faArrowCircleRight} />
    </div>
  </div>
);

export default SlidePresentation;
