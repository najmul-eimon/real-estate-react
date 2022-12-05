import { useState } from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/images/about/about.jpg';
import video from '../../assets/images/about/video.jpg';
import { FaPlay } from "react-icons/fa";
import PropertyModal from '../shared/PropertyModal';
import '../../assets/css/about.css';

const AboutUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="image position-relative">
                <img src={about} alt=""/>
                <div className="video">
                  <img src={video} alt=""/>
                  <button type="button" onClick={handleShow}><FaPlay className="play-icon" /></button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <div className="text-content">
                <div className="about-box">
                  <span className="title ab-us">About Us</span>
                  <h3>We believe in design as a powerful <br/> force for good.</h3>
                  <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="about-box">
                  <span className="title mission">Our Mission</span>  
                  <h3>Believe in design as a powerful <br/> force for good.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                
                <Link to="/contact" className="contact-btn btn-style">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* modal for video popup */}
      <PropertyModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default AboutUs