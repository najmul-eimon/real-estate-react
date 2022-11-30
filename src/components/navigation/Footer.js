import React from 'react';
import '../../assets/css/common.css';
import footerLogo from '../../assets/images/footer-logo.png';
import footerLogoWhite from '../../assets/images/footer-logo-white.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer>
    {/* top-footer start */}
    <section className="top-footer">
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-brand">
                <div className="footer-content">
                  <Link to="/">
                    <img src={footerLogo} alt=""/>
                  </Link>
                  <p className="about">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam. Lorem ipsum dolor sit amet consecteturr adipiscing elit aliquam</p>
                  <ul className="footer-social d-flex align-items-center">
                    <li><a href="#!"><FaFacebookF/></a></li>
                    <li><a href="#!"><FaTwitter/></a></li>
                    <li><a href="#!"><FaInstagram/></a></li>
                    <li><a href="#!"><FaLinkedinIn/></a></li>
                    <li><a href="#!"><FaYoutube/></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-content">
                <div className="footer-title">
                  <h4>Discover</h4>
                </div>
                <ul className="footer-links">
                  <li><Link to="property">New york</Link></li>
                  <li><Link to="property">San Francisco</Link></li>
                  <li><Link to="property">Minnesota</Link></li>
                  <li><Link to="property">Los Angeles</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-content">
                <div className="footer-title">
                  <h4>Company</h4>
                </div>
                <ul className="footer-links">
                  <li><Link to="about">About</Link></li>
                  <li><Link to="contact">Contact us</Link></li>
                  <li><Link to="property">Property</Link></li>
                  <li><Link to="blog">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="footer-content">
                <div className="footer-title">
                  <h4>Contacts us</h4>
                </div>
                <ul className="footer-address">
                  <li>
                    <i className="ph-envelope-simple"></i>
                    <p>mycompany@mail.com</p>
                  </li>
                  <li>
                    <i className="ph-phone"></i>
                    <p>(589) 487 - 5892</p>
                  </li>
                  <li>
                    <i className="ph-map-pin"></i>
                    <ul>
                      <li><p>1545 Broadway</p></li>
                      <li><p>New York, NY 10036</p></li>
                      <li><p>+1 012 345 6789</p></li>
                      <li><p>newyork@casaroyal.com</p></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  top-footer end */}

    {/*  bottom-footer start */}
    <section className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-main">
              <p>Copywrite © 2023 - RealEstate. All rights reserved.</p>

              <Link to="/">
                <img src={footerLogoWhite} alt=""/>
              </Link>

              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="property">Property</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  bottom-footer end */}
  </footer>
  )
}

export default Footer