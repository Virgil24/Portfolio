/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faPhone, faMapMarkerAlt, faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';
import './styles.scss';
import cvVirgil from './CV-Virgil-Kwiatkowski.pdf';

const SlideContact = () => {
  const {
    register, errors, handleSubmit, reset,
  } = useForm();
  const toastifySuccess = () => {
    toast('Votre message a bien été envoyé ! Je reviens vers vous au plus vite', {
      position: 'center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };
  const onSubmit = (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      emailjs.send(
        'service_mszmpy5',
        'template_ojqq899',
        templateParams,
        'user_fimCD2qP4tgt5Df1PuKtX',
      );
      reset();
      toastifySuccess();
    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    //
    <div className="slideFive">
      <div className="slideFive__contentForm">
        <h2 className="slideFive__contentForm__title" id="contact">Me contacter</h2>
      </div>
      <div className="slideFive__contain">
        <div className="slideFive__contain__contactInfos">
          <div className="slideFive__contain__contactInfos__box">
            <div className="slideFive__contain__contactInfos__box__icon"> <a href="https://www.google.fr/maps/place/Boulevard+Carnot,+43000+Le+Puy-en-Velay/@45.0437772,3.87991,16.06z/data=!4m5!3m4!1s0x47f5fbaaa30387f1:0x8a499e54e4d39663!8m2!3d45.0459348!4d3.8794813" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faMapMarkerAlt} /> </a> </div>
            <div className="slideFive__contain__contactInfos__box__text">
              <h3 className="slideFive__contain__contactInfos__box__text__title">Adresse</h3>
              <p className="slideFive__contain__contactInfos__box__text__content"> <a href="https://www.google.fr/maps/place/Boulevard+Carnot,+43000+Le+Puy-en-Velay/@45.0437772,3.87991,16.06z/data=!4m5!3m4!1s0x47f5fbaaa30387f1:0x8a499e54e4d39663!8m2!3d45.0459348!4d3.8794813" target="_blank" rel="noreferrer">Boulevard Carnot, <br />43000, <br />Le-Puy-En-Velay</a></p>
            </div>
          </div>
          <div className="slideFive__contain__contactInfos__box">
            <div className="slideFive__contain__contactInfos__box__icon"> <a href="tel:+33665083567"><FontAwesomeIcon icon={faPhone} /></a></div>
            <div className="slideFive__contain__contactInfos__box__text">
              <h3 className="slideFive__contain__contactInfos__box__text__title">Téléphone</h3>
              <p className="slideFive__contain__contactInfos__box__text__content"> <a href="tel:+33665083567"> 06.65.08.35.67 </a></p>
            </div>
          </div>
          <div className="slideFive__contain__contactInfos__box">
            <div className="slideFive__contain__contactInfos__box__icon"><a href="mailto:kwiatkowski.virgil@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></div>
            <div className="slideFive__contain__contactInfos__box__text">
              <h3 className="slideFive__contain__contactInfos__box__text__title">Email</h3>
              <p className="slideFive__contain__contactInfos__box__text__content"> <a href="mailto:kwiatkowski.virgil@gmail.com">
                kwiatkowski.virgil@gmail.com
              </a>
              </p>
            </div>
          </div>
          <div className="slideFive__contain__contactInfos__box">
            <div className="slideFive__contain__contactInfos__box__icon"><a href={cvVirgil} download><FontAwesomeIcon icon={faAddressCard} /></a></div>
            <div className="slideFive__contain__contactInfos__box__text">
              <h3 className="slideFive__contain__contactInfos__box__text__title">Mon curriculum vitæ </h3>
              <p className="slideFive__contain__contactInfos__box__text__content"> <a href={cvVirgil} download>Télécharger </a>
              </p>
            </div>
          </div>
        </div>
        <div className="slideFive__contain__contactForm">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h5 className="slideFive__contain__contactForm__title">Votre message</h5>
            <div className="slideFive__contain__contactForm__inputBox">
              <input
                type="text"
                name="name"
                ref={register({
                  required: { value: true, message: 'Merci de renseigner un nom' },
                  maxLength: {
                    value: 100,
                    message: 'Votre nom ne peut pas faire plus de 100 caractères',
                  },
                })}
                className="slideFive__contain__contactForm__inputBox__formInput"
              />
              <span className="slideFive__contain__contactForm__inputBox__span">Votre nom et prénom</span>
            </div>
            {errors.name && <span className="errorMessage">{errors.name.message}</span>}
            <div className="slideFive__contain__contactForm__inputBox">
              <input
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="slideFive__contain__contactForm__inputBox__formInput"
              />
              <span className="slideFive__contain__contactForm__inputBox__span">Votre adresse email</span>
            </div>
            {errors.email && (
              <span className="errorMessage">Merci de renseigner une adresse valide</span>
            )}
            <div className="slideFive__contain__contactForm__inputBox">
              <textarea
                rows={3}
                name="message"
                ref={register({
                  required: true,
                })}
                className="slideFive__contain__contactForm__inputBox__formInput"
              />
              {errors.message && <span className="errorMessage">Merci d'écrire votre message avant d'envoyer</span>}
              <span className="slideFive__contain__contactForm__inputBox__span">Votre message</span>
            </div>
            <div className="slideFive__contain__contactForm__inputButton">
              <input className="slideFive__contain__contactForm__inputButton__message" type="submit" value="J'ai fini !" name="" />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      <aside className="slideFive__footer">
        <p>Copyright © 2020 Virgil Kwiatkowski - Tous droits réservés</p>
        <p> <a href="mailto:kwiatkowski.virgil@gmail.com">kwiatkowski.virgil@gmail.com</a></p>
        <p> <a href="tel:+33665083567">06.65.08.35.67</a></p>
      </aside>
    </div>
  );
};

export default SlideContact;
