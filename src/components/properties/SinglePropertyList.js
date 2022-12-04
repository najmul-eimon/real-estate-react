import React from 'react';
import { Link } from 'react-router-dom';

const SinglePropertyList = ({property}) => {
  const {id, name, image, floor, space, bedRooms, description} = property;
  return (
    <li className="single-property">
      <div className="image">
        <img src={image} className="img-fluid" alt=""/>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description.slice(1,2)}</p>
        <div className="d-flex align-items-center justify-content-between feature">
          <div className="text-start">
            <p>Floor</p>
            <h5>{floor}</h5>
          </div>
          <div className="text-center">
            <p>Total Space</p>
            <h5>{space} M<sup>2</sup></h5>
          </div>
          <div className="text-end">
            <p>Bedrooms</p>
            <h5>{bedRooms}</h5>
          </div>
        </div>
        <div className="buttons d-flex align-items-center">
          <a className="video-popup" href="https://www.youtube.com/watch?v=KbTjl1PNCzg">Play Video</a>
          <Link to={`property/property-details/${id}`}>Details More</Link>
        </div>
      </div>
    </li>
  )
}

export default SinglePropertyList