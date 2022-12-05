import React, { useState } from "react";
import {BsChevronDown, BsSliders} from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi';
import MultiRangeSlider from "multi-range-slider-react";
import "../../assets/css/filter-option.css";

const Filter = ({data}) => {
  const [showLocation, setShowLocation] = useState(false);
  const [showTypes, setShowTypes] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [showRoom, setShowRoom] = useState(false);
  const [showFeature, setShowFeature] = useState(false);

  const [location, setLocation] = useState("Select Location");
  const [type, setType] = useState("Property Type");
  const [category, setCategory] = useState("All Category");
  const [status, setStatus] = useState("Select Status");
  const [city, setCity] = useState("Select City");
  const [room, setRoom] = useState("Select Room");
  const [feature, setFeature] = useState("Select Feature");

  const [minPriceValue, setMinPriceValue] = useState(1000);
  const [maxPriceValue, setMaxPriceValue] = useState(8000);

  const [minAreaValue, setMinAreaValue] = useState(1000);
  const [maxAreaValue, setMaxAreaValue] = useState(8000);

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const locations = ["All Cities", "New york", "Los Angeles", "Chicago", "San Diego"];
  const types = ["All Property", "Single House", "Townhouse", "Multi Family House", "Villa"];
  const categories = ["All Apartment", "Villas", "House", "Townhouse", "Villa"];
  const allStatus = ["All Cities", "New york", "Los Angeles", "Chicago", "San Diego"];
  const cities = ["All Cities", "New york", "Los Angeles", "Chicago", "San Diego"];
  const rooms = ["Single Room", "Double Room"];
  const features = ["Duplex", "Delux", "Adjoining", "Suite"];

  const handlePriceInput = (e) => {
    setMinPriceValue(e.minValue);
    setMaxPriceValue(e.maxValue);
  };

  const handleAreaInput = (e) => {
    setMinAreaValue(e.minValue);
    setMaxAreaValue(e.maxValue);
  };

  return (
    <div className="filter-main">
      <div className="filter-content top-content">
        <div className="row filter-row align-items-center">
          {/* location */}
          <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
            <div className="custom-select">
              <h4>Location</h4>
              <button
                type="button"
                className="select-btn"
                onBlur={() => setShowLocation(false)}
                onClick={() => setShowLocation(!showLocation)}
              >
                <div className="btn-main">
                  {location}
                  <span className={showLocation ? 'rotate' : ''}>
                    <BsChevronDown className="arrow-icon" />
                  </span>
                </div>
                {showLocation && (
                  <div className="btn-dropdown">
                    {locations.map((location, index) => (
                      <p onClick={() => {
                          setLocation(location);
                          setShowLocation(!showLocation);
                        }}
                        key={index}
                      >
                        {location}
                      </p>
                    ))}
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* type */}
          <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
            <div className="custom-select">
              <h4>Type</h4>
              <button
                type="button"
                className="select-btn"
                onBlur={() => setShowTypes(false)}
                onClick={() => setShowTypes(!showTypes)}
              >
                <div className="btn-main">
                  {type}
                  <span className={showTypes ? 'rotate' : ''}>
                    <BsChevronDown className="arrow-icon" />
                  </span>
                </div>
                {showTypes && (
                  <div className="btn-dropdown">
                    {types.map((type, index) => (
                      <p onClick={() => {
                          setType(type);
                          setShowTypes(!showTypes);
                        }}
                        key={index}
                      >
                        {type}
                      </p>
                    ))}
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* category */}
          <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
            <div className="custom-select">
              <h4>Category</h4>
              <button
                  type="button"
                  className="select-btn"
                  onBlur={() => setShowCategory(false)}
                  onClick={() => setShowCategory(!showCategory)}
                >
                  <div className="btn-main">
                    {category}
                    <span className={showCategory ? 'rotate' : ''}>
                      <BsChevronDown className="arrow-icon" />
                    </span>
                  </div>
                  {showCategory && (
                    <div className="btn-dropdown">
                      {categories.map((category, index) => (
                        <p onClick={() => {
                            setCategory(category);
                            setShowCategory(!showCategory);
                          }}
                          key={index}
                        >
                          {category}
                        </p>
                      ))}
                    </div>
                  )}
                </button>
            </div>
          </div>

          {/* filter and search button */}
          <div className={data === "sidebar" ? "col-sm-12 order-1" : "col-sm-6 col-lg-3 order-1 order-sm-0"}>
            <div className="filter-buttons d-flex align-items-center">
              <button type="button" id="moreFilters" className="filter" onClick={() => setShowMoreFilters(!showMoreFilters)}>
                Filter <BsSliders className="filter-icon"/>
              </button>
              <button type="button" className="search btn-style">
                Search <FiSearch className={data === "sidebar" ? "search-icon" : "search-icon d-none"}/>
              </button>
            </div>
          </div>

          <div className="col-sm-12 mt-0">
            <div className={showMoreFilters ? 'bottom-content show':'bottom-content'}>
              <div className="row filter-row">
                {/* status */}
                <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
                  <div className="custom-select">
                    <h4>Status</h4>
                    <button
                        type="button"
                        className="select-btn"
                        onBlur={() => setShowStatus(false)}
                        onClick={() => setShowStatus(!showStatus)}
                      >
                      <div className="btn-main">
                        {status}
                        <span className={showStatus ? 'rotate' : ''}>
                          <BsChevronDown className="arrow-icon" />
                        </span>
                      </div>
                      {showStatus && (
                        <div className="btn-dropdown">
                          {allStatus.map((status, index) => (
                            <p onClick={() => {
                                setStatus(status);
                                setShowStatus(!showStatus);
                              }}
                              key={index}
                            >
                              {status}
                            </p>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                {/* city */}
                <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
                  <div className="custom-select">
                    <h4>City</h4>
                    <button
                        type="button"
                        className="select-btn"
                        onBlur={() => setShowCity(false)}
                        onClick={() => setShowCity(!showCity)}
                      >
                      <div className="btn-main">
                        {city}
                        <span className={showCity ? 'rotate' : ''}>
                          <BsChevronDown className="arrow-icon" />
                        </span>
                      </div>
                      {showCity && (
                        <div className="btn-dropdown">
                          {cities.map((city, index) => (
                            <p onClick={() => {
                                setCity(city);
                                setShowCity(!showCity);
                              }}
                              key={index}
                            >
                              {city}
                            </p>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                {/* room */}
                <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
                  <div className="custom-select">
                    <h4>Room</h4>
                    <button
                        type="button"
                        className="select-btn"
                        onBlur={() => setShowRoom(false)}
                        onClick={() => setShowRoom(!showRoom)}
                      >
                      <div className="btn-main">
                        {room}
                        <span className={showRoom ? 'rotate' : ''}>
                          <BsChevronDown className="arrow-icon" />
                        </span>
                      </div>
                      {showRoom && (
                        <div className="btn-dropdown">
                          {rooms.map((room, index) => (
                            <p onClick={() => {
                                setRoom(room);
                                setShowRoom(!showRoom);
                              }}
                              key={index}
                            >
                              {room}
                            </p>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                {/* feature */}
                <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
                  <div className="custom-select">
                    <h4>Feature</h4>
                    <button
                        type="button"
                        className="select-btn"
                        onBlur={() => setShowFeature(false)}
                        onClick={() => setShowFeature(!showFeature)}
                      >
                      <div className="btn-main">
                        {feature}
                        <span className={showFeature ? 'rotate' : ''}>
                          <BsChevronDown className="arrow-icon" />
                        </span>
                      </div>
                      {showFeature && (
                        <div className="btn-dropdown">
                          {features.map((feature, index) => (
                            <p onClick={() => {
                              setFeature(feature);
                                setShowFeature(!showFeature);
                              }}
                              key={index}
                            >
                              {feature}
                            </p>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                {/* price range */}
                <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6"}>
                  <h4>Price Range</h4>
                  <MultiRangeSlider className="price-range" min={0} max={10000} step={100} minValue={minPriceValue} maxValue={maxPriceValue}
                      onInput={(e) => {
                        handlePriceInput(e);
                      }}
                    />
                    <div className="range-value">
                      <p>${minPriceValue}</p>
                      <p>to</p>
                      <p>${maxPriceValue}</p>
                    </div>
                </div>

                {/* area range */}
                <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6"}>
                  <h4>Area Range</h4>
                  <MultiRangeSlider className="area-range" min={0} max={10000} step={100} minValue={minAreaValue} maxValue={maxAreaValue}
                      onInput={(e) => {
                        handleAreaInput(e);
                      }}
                    />
                    <div className="range-value">
                      <p>{minAreaValue}</p>
                      <p>to</p>
                      <p>{maxAreaValue}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
