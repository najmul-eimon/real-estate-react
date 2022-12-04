import React, { useState } from 'react';
import linkedin from '../../assets/images/svg/linkedin.svg';
import twitter from '../../assets/images/svg/twitter.svg';
import facebook from '../../assets/images/svg/facebook.svg';
import {BsChevronDown, BsEnvelopeOpen} from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
import '../../assets/css/filter-option.css';
import '../../assets/css/contacts.css';

const Contact = () => {
  const [showService, setShowService] = useState(false);
  const [service, setService] = useState("Select");
  const services = ["Single House", "Duplex House", "Premiun Villa"];

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
            <form action="#">
              <div className="contact-form-fields">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name">Enter Your name</label>
                    <input type="text" placeholder="Enter Your name" className="input-fields" id="name"/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email address</label>
                    <input type="text" placeholder="Enter Email address" className="input-fields" id="email"/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Phone Number</label>
                    <input type="tel" placeholder="Enter Phone Number" className="input-fields" id="phone"/>
                  </div>
                  <div className="col-md-6">
                    <div className="custom-select">
                      <label>Select Service Type</label>
                      <button
                        type="button"
                        className="select-btn"
                        onBlur={() => setShowService(false)}
                        onClick={() => setShowService(!showService)}
                      >
                        <div className="btn-main">
                          {service}
                          <span className={showService ? 'rotate' : ''}>
                            <BsChevronDown className="arrow-icon" />
                          </span>
                        </div>
                        {showService && (
                          <div className="btn-dropdown">
                            {services.map((service, index) => (
                              <p onClick={() => {
                                  setService(service);
                                  setShowService(!showService);
                                }}
                                key={index}
                              >
                                {service}
                              </p>
                            ))}
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message">Massage</label>
                    <textarea id="message" className="input-fields"></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="submit-btn btn-style">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact