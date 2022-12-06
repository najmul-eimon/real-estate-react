import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {properties} from '../../data/property';
import PropertyModal from "../shared/PropertyModal";
import '../../assets/css/properties.css';

const RelatedProperties = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="all-properties related-properties">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Related Properties</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper 
                loop= {true}
                spaceBetween= {24}
                autoplay= {true}
                slidesPerGroup= {1}
                breakpoints= {{
                  576: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  }
                }}
                className="related-property-slider">
                  {
                    properties.map(({id, name, floor, space, bedRoom, image, description}) => <SwiperSlide key={id}>
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
                          <Link to={`/property/property-details/${id}`} onClick={window.scrollTo(0, 0)}>Details More</Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    )
                  }
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* modal for video popup */}
      <PropertyModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default RelatedProperties