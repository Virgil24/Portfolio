import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './styles.scss';

const SlideFive = () => {
  const {
    register, errors, handleSubmit, reset,
  } = useForm();

  const onSubmit =  (data) => {
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
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <div id="fifth__slide" className="slide__five">
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        ref={register({
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less',
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                      />
                      {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      />
                      {errors.email && (
                        <span className="errorMessage">Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        ref={register({
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters',
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                      />
                      {errors.subject && (
                        <span className="errorMessage">{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        ref={register({
                          required: true,
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      />
                      {errors.message && <span className="errorMessage">Please enter a message</span>}
                    </div>
                  </div>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFive;
