import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyModal from '../shared/PropertyModal';
import '../../assets/css/properties.css';

const SinglePropertyList = ({property}) => {
  const {id, name, image, floor, space, bedRoom, description} = property;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <li className="single-property">
        <div className="image">
          <img src={image} className="img-fluid" alt=""/>
        </div>
        <div className="content">
          <h3>{name}</h3>
          <p>{description.slice(2,3)}</p>
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
              <h5>{bedRoom}</h5>
            </div>
          </div>
          <div className="buttons d-flex align-items-center">
            <button type="button" onClick={handleShow}>Play Video</button>
            <Link to={`/property/property-details/${id}`}>Details More</Link>
          </div>
        </div>
      </li>

      {/* modal for video popup */}
      <PropertyModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default SinglePropertyList