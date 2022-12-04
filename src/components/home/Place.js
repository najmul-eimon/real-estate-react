import React from 'react';
import {places} from '../../data/place';
import '../../assets/css/place.css';
import { Link } from 'react-router-dom';
import {BiChevronRightCircle} from 'react-icons/bi';

const Place = () => {

  return (
    <section className="place">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Most Populer Place</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="all-places">
              <div className="grid">
                {
                  places.map(place => 
                    <div key={place.id} className="single-place">
                      <Link to="property">
                        <img src={place.image} className="img-fluid" alt=""/>
                        <div className="overlay">
                          <p>{place.name} <BiChevronRightCircle className='place-icon'/></p>
                        </div>
                      </Link>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Place