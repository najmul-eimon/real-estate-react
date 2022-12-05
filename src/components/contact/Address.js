import React from 'react';
import {address} from '../../data/address';
import '../../assets/css/contacts.css';

const Address = () => {
  return (
    <section class="address">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title text-center">
              <h2>Our Offices</h2>
            </div>
          </div>
          <div class="col-lg-12 col-xl-10 offset-xl-1">
            <div class="row address-row">
              {
                address.map(({id, image, city, area, location, phone, email}) => 
                <div key={id} class="col-md-6 col-lg-6">
                  <div class="address-card">
                    <div class="image">
                      <img src={image} alt=""/>
                    </div>
                    <h4>{city}</h4>
                    <ul>
                      <li><p>{area}</p></li>
                      <li><p>{location}</p></li>
                      <li><p>{phone}</p></li>
                      <li><p>{email}</p></li>
                    </ul>
                    <a href="#!" class="btn-style">Get direction</a>
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