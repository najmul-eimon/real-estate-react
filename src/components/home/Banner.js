import React from 'react';
import '../../assets/css/banner.css';
import Filter from '../shared/Filter';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-content">
              <div className="banner-text">
                <div className="content text-center">
                  <h1>Smart way to find a <span>property</span> right for you</h1>
                  <p>Search confidently with your trusted source of houses for sale or rent</p>
                </div>
              </div>
              <Filter/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;