import React from 'react';

import './styles.scss';
import virgil from './virgilfinal.png';

const SlideOne = () => (
  <div id="first__slide">
    <h1 className="presentation">Virgil Kwiatkowski</h1>
    <h2 className="presentation__subtitle">Developpeur Web FullStack Junior</h2>
    <div className="container__card">
      <div className="card">
        <div className="circle" />
        <div className="content">
          <h3 className="content__title"> Bienvenue sur mon Portfolio</h3>
          <p className="content__text">Je m'appelle Virgil, J'ai 26 ans, j'habite en haute-loire, au Puy-en-Velay.</p>
          <p className="content__text">Les présentations étants faites, je vous laisse découvrir mon profil qui je l'espère saura attirer votre attention.</p>
          <a className="content__button" href="#">Contactez-moi</a>
        </div>
        <img className="picture" src={virgil} alt="ownPicture" />
      </div>
    </div>
  </div>
);

export default SlideOne;
