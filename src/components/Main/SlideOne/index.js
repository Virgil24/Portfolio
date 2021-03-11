import React from 'react';

import './styles.scss';
import virgil from './virgilfinal.png';

const SlideOne = () => (
  <div id="first__slide" className="slide__one">
    <h1 className="slide__one__presentation">Virgil Kwiatkowski</h1>
    <h2 className="slide__one__presentation__subtitle">Developpeur Web FullStack Junior</h2>
    <div className="slide__one__container">
      <div className="slide__one__container__card">
        <div className="slide__one__container__card__circle" />
        <div className="slide__one__container__card__content">
          <h3 className="slide__one__container__card__content__title"> Bienvenue sur mon Portfolio</h3>
          <p className="slide__one__container__card__content__text">Je m'appelle Virgil, J'ai 26 ans, j'habite en haute-loire, au Puy-en-Velay.</p>
          <p className="slide__one__container__card__content__text">Les présentations étants faites, je vous laisse découvrir mon profil qui je l'espère saura attirer votre attention.</p>
          <a className="slide__one__container__card__content__button" href="#">Contactez-moi</a>
        </div>
        <img className="slide__one__container__card__picture" src={virgil} alt="ownPicture" />
      </div>
    </div>
  </div>
);

export default SlideOne;
