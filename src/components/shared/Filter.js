import React from 'react';
import '../../assets/css/filter-option.css';

const Filter = () => {
  return (
    <div className="filter-main">
      <div className="filter-content top-content">
        <div className="row filter-row align-items-center">
          <div className="col-sm-6 col-lg-3">
            <h4>Location</h4>
            <select className="filter-select">
              <option value="0">Select Location</option>
              <option value="1">All Cities</option>
              <option value="2">New york</option>
              <option value="3">Los Angeles</option>
              <option value="4">Chicago</option>
              <option value="5">San Diego</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4>Type</h4>
            <select className="filter-select">
              <option value="0">Property type</option>
              <option value="1">All Property</option>
              <option value="2">Single House</option>
              <option value="3">Townhouse</option>
              <option value="4">Multi Family House</option>
              <option value="5">Villa</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4>Category</h4>
            <select className="filter-select">
              <option value="0">All Apartment</option>
              <option value="1">Villas</option>
              <option value="2">House</option>
              <option value="3">Townhouse</option>
              <option value="4">Villa</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-3 order-1 order-sm-0">
            <div className="filter-buttons d-flex align-items-center">
              <button type="button" id="moreFilters" className="filter">Filter<i className="ph-sliders"></i></button>
              <button type="button" className="search btn-style">Search</button>
            </div>
          </div>
          <div className="col-sm-12 mt-0">
            <div className="bottom-content">
              <div className="row filter-row">
                <div className="col-sm-6 col-lg-3">
                  <h4>Status</h4>
                  <select className="filter-select">
                    <option value="0">Select Status</option>
                    <option value="1">All Cities</option>
                    <option value="2">New york</option>
                    <option value="3">Los Angeles</option>
                    <option value="4">Chicago</option>
                    <option value="5">San Diego</option>
                  </select>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <h4>City</h4>
                  <select className="filter-select">
                    <option value="0">All Cities</option>
                    <option value="1">New york</option>
                    <option value="2">Los Angeles</option>
                    <option value="3">Chicago</option>
                    <option value="4">San Diego</option>
                  </select>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <h4>Room</h4>
                  <select className="filter-select">
                    <option value="1">Single Room</option>
                    <option value="2">Double Room</option>
                  </select>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <h4>Category</h4>
                  <select className="filter-select">
                    <option value="1">Duplex</option>
                    <option value="2">Deluxe</option>
                    <option value="3">Adjoining</option>
                    <option value="4">Suite</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <h4>Price Range</h4>
                  <div className="filter-range">
                    <div id="price-slider-range"></div>
                    <div className="price-range d-flex justify-content-center align-items-center">
                      <input type="text" id="amount"/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4>Area Range</h4>
                  <div className="filter-range">
                    <div id="area-slider-range"></div>
                    <div className="price-range d-flex justify-content-center align-items-center">
                      <input type="text" id="area"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter