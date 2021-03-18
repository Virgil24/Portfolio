/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './styles.scss';

const SlideFive = () => {
  const {
    register, errors, handleSubmit, reset,
  } = useForm();

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
    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="all" id="contact">
      <div className="contentform">
        <h2 className="content__title">Me contacter</h2>
        <p>Je suis aujourd'hui à la recherche d'une alternance afin d'intégrer la licence proffessionnelle <a href="https://iut.uca.fr/formations/lp-metiers-du-numerique-conception-redaction-et-realisation-web">Conception, rédaction et réalisation web : option développement web</a> pour l'année académique 2021-2022 (Septembre-Juin), n'hésitez pas à me contacter pour tout renseignement que vous souhaiteriez obtenir. <br /><br /> Je suis également disponible pour discuter de tout ce qui tourne autour du développement.
        </p>
      </div>
      <div className="contain">
        <div className="contactInfos">
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
            <div className="text">
              <h3>Adresse</h3>
              <p>Boulevard Carnot, Le-Puy-En-Velay <br />43000 <br />Le-Puy-En-Velay</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="text">
              <h3>Téléphone</h3>
              <p> <a href="tel:0665083567" /> 06.65.08.35.67 </p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="text">
              <h3>Email</h3>
              <p> <a href="mailto:kwiatkowski.virgil@gmail.com" />
                kwiatkowski.virgil@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h5>Votre message</h5>
            <div className="inputbox">
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
                className="form-control formInput"
              />
              <span className="form__span">Full name</span>
            </div>
            {errors.name && <span className="errorMessage">{errors.name.message}</span>}
            <div className="inputbox">
              <input
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="formInput"
              />
              <span className="form__span">Adresse email</span>
            </div>
            {errors.email && (
              <span className="errorMessage">Please enter a valid email address</span>
            )}
            <div className="inputbox">
              <textarea
                rows={3}
                name="message"
                ref={register({
                  required: true,
                })}
                className="formInput"
              />
              {errors.message && <span className="errorMessage">Merci d'écrire votre message avant d'envoyer</span>}
              <span className="form__span">message</span>
            </div>
            <div className="inputBox">
              <input className="formInput inputButton" type="submit" value="J'ai fini !" name="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideFive;
