import React from 'react';
import './contact.css'; // Assuming you have custom CSS for styling

const Contact = () => {
  return (
    <div className="contact1">
      <div className="container-contact1">
        <form className="contact1-form validate-form">
          <span className="contact1-form-title">Get in touch</span>
          <div className="wrap-input1 validate-input" data-validate="Name is required">
            <input className="input1" type="text" name="name" placeholder="Name" required />
            <span className="shadow-input1"></span>
          </div>
          <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input className="input1" type="email" name="email" placeholder="Email" required />
            <span className="shadow-input1"></span>
          </div>
          <div className="wrap-input1 validate-input" data-validate="Subject is required">
            <input className="input1" type="text" name="subject" placeholder="Subject" required />
            <span className="shadow-input1"></span>
          </div>
          <div className="wrap-input1 validate-input" data-validate="Message is required">
            <textarea className="input1" name="message" placeholder="Message" required></textarea>
            <span className="shadow-input1"></span>
          </div>
          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn">
              <span>
                Send Email
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
