import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyModal from '../shared/PropertyModal';
import '../../assets/css/properties.css';

const SinglePropertyGrid = ({property}) => {
  const {id, name, image, floor, space, bedRoom, description} = property;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="single-property">
          <div className="item-wrapper">
            <h3>{name}</h3>
            <div className="d-flex align-items-center justify-content-between feature">
              <div className="text-start">
                <p>Floor</p>
                <h5>{floor}</h5>
              </div>
              <div>
                <p>Total Space</p>
                <h5>{space} M<sup>2</sup></h5>
              </div>
              <div className="text-end">
                <p>Bedrooms</p>
                <h5>{bedRoom}</h5>
              </div>
            </div>
            <div className="image">
              <img src={image} className="img-fluid" alt=""/>
            </div>
            <p className="desc">{description.slice(0,1)}</p>
          </div>
          <div className="buttons d-flex align-items-center">
            <button type="button" onClick={handleShow}>Play Video</button>
            <Link to={`/property/property-details/${id}`}>Details More</Link>
          </div>
        </div>
      </div>

      {/* modal for video popup */}
      <PropertyModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default SinglePropertyGrid