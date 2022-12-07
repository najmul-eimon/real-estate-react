import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InnerSidebar from "../shared/InnerSidebar";
import PropertyModal from "../shared/PropertyModal";
import "../../assets/css/property-details.css";

const Details = ({ data }) => {
  const { name, address, location, date, price, gallery, description, propertyDetails, video, floorPlans } = data;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="property-details">
        <div className="container">
          {/*  property-details title  */}
          <div className="title-area">
            <div className="row">
              <div className="col-md-8">
                <div className="property-title">
                  <h2>{name}</h2>
                  <ul>
                    <li>
                      <FiMapPin className="icon" />
                      <p>{address}, {location}</p>
                    </li>
                    <li>
                      <IoCalendarNumberOutline className="icon" />
                      <p>{date}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price text-end">
                  <h3>$ {price}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* property-details main */}
          <div className="details-main">
            <div className="row">
              {/*---------------------------------- description ----------------------------------*/}
              <div className="col-lg-7 col-xl-8">
                {/* images */}
                <div className="details-images">
                  <div className="grid">
                    {gallery?.map((img, index) => (
                      <div key={index} className="single-img">
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* description */}
                <div className="details-box">
                  <div className="details-title">
                    <h4>Description</h4>
                  </div>
                  {description?.slice(1).map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>

                {/* property details */}
                <div className="details-box">
                  <div className="details-title">
                    <h4>Property Detail</h4>
                  </div>
                  <ul className="property-details-list">
                    {propertyDetails?.map(({ id, label, value }) => {
                      return (
                        <li key={id}>
                          <p>
                            {label}: &nbsp;{value}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Floor Plans */}
                <div className="details-box">
                  <div className="details-title">
                    <h4>Floor Plans</h4>
                  </div>
                  <Tabs
                    defaultActiveKey="first"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    {floorPlans?.map(({ name, floor, details, image }, index) => (
                      <Tab key={index} eventKey={name} title={floor}>
                        <div className="row detail-row">
                          <div className="col-xl-7">
                            <div className="image">
                              <img src={image} alt="" />
                            </div>
                          </div>
                          <div className="col-xl-5">
                            <div className="text">
                              <h4>{floor}</h4>
                              <p>{details}</p>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    ))}
                  </Tabs>
                </div>

                {/* Video */}
                <div className="details-box">
                  <div className="details-title">
                    <h4>Video</h4>
                  </div>
                  <div className="video">
                    <img src={video} alt="" />
                    <div className="overlay">
                      <button type="button" onClick={handleShow}><FaPlay className="play-icon" /></button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="details-box">
                  <div className="details-title">
                    <h4>Location</h4>
                  </div>
                  <div className="location">
                    <iframe
                      title="location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472837.24940038053!2d-77.05569704082191!3d38.87124384912429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7a02b10a065%3A0x73cf754eae741db3!2sUnited%20States%20Holocaust%20Memorial%20Museum!5e0!3m2!1sen!2sbd!4v1669201040299!5m2!1sen!2sbd"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/*---------------------------------- sidebar ----------------------------------*/}
              <div className="col-lg-5 col-xl-4">
                <InnerSidebar data={"property-details"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* modal for video popup */}
      <PropertyModal show={show} handleClose={handleClose}/>
    </>
  );
};

export default Details;
