import React from 'react';
import {address} from '../../data/address';
import '../../assets/css/contacts.css';

const Address = () => {
  return (
    <section className="address">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Our Offices</h2>
            </div>
          </div>
          <div className="col-lg-12 col-xl-10 offset-xl-1">
            <div className="row address-row">
              {
                address.map(({id, image, city, area, location, phone, email}) => 
                <div key={id} className="col-md-6 col-lg-6">
                  <div className="address-card">
                    <div className="image">
                      <img src={image} alt=""/>
                    </div>
                    <h4>{city}</h4>
                    <ul>
                      <li><p>{area}</p></li>
                      <li><p>{location}</p></li>
                      <li><p>{phone}</p></li>
                      <li><p>{email}</p></li>
                    </ul>
                    <a href="#!" className="btn-style">Get direction</a>
                  </div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address