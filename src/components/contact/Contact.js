import React from 'react';
import linkedin from '../../assets/images/svg/linkedin.svg';
import twitter from '../../assets/images/svg/twitter.svg';
import facebook from '../../assets/images/svg/facebook.svg';
import {BsEnvelopeOpen} from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
import ContactForm from './ContactForm';
import '../../assets/css/filter-option.css';
import '../../assets/css/contacts.css';

const Contact = () => {

  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Get In Touch</h2>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-3 offset-xl-1 social-area">
            <div className="social-box text-center">
              <span><FiPhoneCall className="icon"/></span>
              <ul>
                <li><a href="tel:0057489845">+00 57489845</a></li>
                <li><a href="tel:0057489845">+00 57489845</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="social-box text-center">
              <h4>Socials</h4>
              <ul className="social-media">
                <li>
                  <a href="#!">
                    <img src={linkedin} alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={twitter} alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={facebook} alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="social-box text-center">
              <span><BsEnvelopeOpen className="icon"/></span>
              <ul>
                <li><p>realestate@gmail.com</p></li>
                <li><p>realestate@gmail.com</p></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 offset-xl-2">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact