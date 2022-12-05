import { useState } from 'react';
import {BsChevronDown} from 'react-icons/bs';

const ContactForm = ({data}) => {
  const [showService, setShowService] = useState(false);
  const [service, setService] = useState("Select");
  const services = ["Single House", "Duplex House", "Premiun Villa"];

  return (
    <form action="#">
      <div className="contact-form-fields">
        <div className="row">
          <div className={data === "sidebar" ? "col-md-12" : "col-md-6"}>
            <label htmlFor="name">Enter Your name</label>
            <input type="text" placeholder="Enter Your name" className="input-fields" id="name"/>
          </div>
          <div className={data === "sidebar" ? "col-md-12" : "col-md-6"}>
            <label htmlFor="email">Email address</label>
            <input type="text" placeholder="Enter Email address" className="input-fields" id="email"/>
          </div>
          <div className={data === "sidebar" ? "col-md-12" : "col-md-6"}>
            <label htmlFor="email">Phone Number</label>
            <input type="tel" placeholder="Enter Phone Number" className="input-fields" id="phone"/>
          </div>
          <div className={data === "sidebar" ? "col-md-12" : "col-md-6"}>
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
            <button type="submit" className="submit-btn btn-style">{data === "sidebar" ? "Send Message" : "Send"}</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm