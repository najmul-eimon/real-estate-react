import React, { useContext } from 'react';
import {places} from '../../data/place';
import { Link } from 'react-router-dom';
import {BiChevronRightCircle} from 'react-icons/bi';
import { SaveToLocalContext } from '../layout/Layout';
import '../../assets/css/place.css';

const Place = () => {
  // get data from context
  const {setGetCategory, setActiveBtn, setGetCity} = useContext(SaveToLocalContext);

  const handlePlace = (city) => {
    setGetCity(city);
    setGetCategory('all');
    setActiveBtn('all');
  }

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
                  places.map(({id, name, image}) => 
                    <div key={id} className="single-place">
                      <Link to="property" onClick={() => handlePlace(name)}>
                        <img src={image} className="img-fluid" alt=""/>
                        <div className="overlay">
                          <p>{name} <BiChevronRightCircle className='place-icon'/></p>
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