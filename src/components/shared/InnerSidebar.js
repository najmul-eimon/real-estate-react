import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import {properties} from '../../data/property';
import Filter from '../../components/shared/Filter';
import ContactFrom from '../../components/contact/ContactForm';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import '../../assets/css/inner-sidebar.css';

const InnerSidebar = () => {
  return (
    <div className="sidebar">
      {/* Featured Properties */}
      <div className="details-box mt-0">
        <div className="details-title">
          <h5>Featured Properties</h5>
        </div>
        <ul className="featured-list">
          {
            properties.slice(0,3).map(({id, image, name, price, rating}) => 
            <li key={id} className="d-flex align-items-center">
              <div className="image">
                <Link to={`/property/property-details/${id}`}>
                  <img src={image} alt=""/>
                </Link>
              </div>
              <div className="others">
                <ul className="d-flex align-items-center">
                  {
                    [...Array(rating)].map((i, index) => <li key={index}><FaStar className="rating-icon"/></li>)
                  }
                </ul>
                <Link to={`/property/property-details/${id}`} className="item-title">{name}</Link>
                <p>$ {price}</p>
              </div>
            </li>
            )
          }
        </ul>
      </div>

      {/* Search Properties */}
      <div className="details-box">
        <div className="details-title">
          <h5>Search Properties</h5>
        </div>
        {/* filter options */}
        <Filter data="sidebar"/>
      </div>

      {/* Drop Messege For Book */}
      <div className="details-box">
        <div className="details-title">
          <h5>Drop Messege For Book</h5>
        </div>
        <ContactFrom data="sidebar"/>
      </div>

      {/* Leatest Blogs */}
      <div className="details-box blog-box">
        <div className="details-title">
          <h5>Leatest Blogs</h5>
        </div>
        <ul className="blog-list">
          <li className="d-flex align-items-center">
            <div className="image">
              <img src="assets/images/property-details/blog1.png" alt=""/>
            </div>
            <div className="others">
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center"><i className="ph-calendar"></i>September 26,2023</span>
                <a href="blog-details.html" className="blog-details-btn"><i className="ph-arrow-up-right"></i></a>
              </div>
              <h4>How much do you know about......</h4>
            </div>
          </li>
          <li className="d-flex align-items-center">
            <div className="image">
              <img src="assets/images/property-details/blog2.png" alt=""/>
            </div>
            <div className="others">
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center"><i className="ph-calendar"></i>September 26,2023</span>
                <a href="blog-details.html" className="blog-details-btn"><i className="ph-arrow-up-right"></i></a>
              </div>
              <h4>How much do you know about......</h4>
            </div>
          </li>
          <li className="d-flex align-items-center">
            <div className="image">
              <img src="assets/images/property-details/blog3.png" alt=""/>
            </div>
            <div className="others">
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center"><i className="ph-calendar"></i>September 26,2023</span>
                <a href="blog-details.html" className="blog-details-btn"><i className="ph-arrow-up-right"></i></a>
              </div>
              <h4>How much do you know about......</h4>
            </div>
          </li>
        </ul>
      </div>

      {/* Share on */}
      <div className="details-box social-box">
        <div className="details-title">
          <h5>Share on</h5>
        </div>
        <ul className="social-icon-list d-flex align-items-center">
          <li><a href="#!"><FaTwitter className='social-icon'/></a></li>
          <li><a href="#!"><FaYoutube className='social-icon'/></a></li>
          <li><a href="#!"><FaFacebookF className='social-icon'/></a></li>
          <li><a href="#!"><FaLinkedinIn className='social-icon'/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default InnerSidebar