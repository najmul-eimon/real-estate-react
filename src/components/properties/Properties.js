import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {BsGrid} from 'react-icons/bs';
import {FaRegListAlt} from 'react-icons/fa';
import {properties} from '../../data/property';
import '../../assets/css/properties.css';
import SinglePropertyList from './SinglePropertyList';
import SinglePropertyGrid from './SinglePropertyGrid';

const Properties = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="properties">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>The latest properties available</h2>
            </div>
          </div>
          <div className="col-md-12">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title={<FaRegListAlt className='view-icon'/>}>
              <div className="col-md-12">
                <ul className="d-flex align-items-center filter-btn-list">
                  <li className="active"><button type="button">All</button></li>
                  <li><button type="button">Appartment</button></li>
                  <li><button type="button">Lend</button></li>
                  <li><button type="button">House</button></li>
                  <li><button type="button">Villa</button></li>
                  <li className='position-relative'>
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                      More
                    </button>
                    {
                      showDropdown && 
                      <ul className='filter-dropdown'>
                        <li><button className="dropdown-item">Luxury Homes</button></li>
                        <li><button className="dropdown-item">Office</button></li>
                        <li><button className="dropdown-item">Single Family</button></li>
                        <li><button className="dropdown-item">Store</button></li>
                        <li><button className="dropdown-item">Double</button></li>
                      </ul>
                    }
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <ul className="list-view" id="property-list-container">
                  {
                    properties.map(property => <SinglePropertyList key={property.id} property={property}/>)
                  }
                </ul>
              </div>
            </Tab>
            <Tab eventKey="profile" title={<BsGrid className='view-icon'/>}>
              <div className="col-md-12">
                <ul className="d-flex align-items-center filter-btn-list">
                  <li className="active"><button type="button">All</button></li>
                  <li><button type="button">Appartment</button></li>
                  <li><button type="button">Lend</button></li>
                  <li><button type="button">House</button></li>
                  <li><button type="button">Villa</button></li>
                  <li className='position-relative'>
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                      More
                    </button>
                    {
                      showDropdown && 
                      <ul className='filter-dropdown'>
                        <li><button className="dropdown-item">Luxury Homes</button></li>
                        <li><button className="dropdown-item">Office</button></li>
                        <li><button className="dropdown-item">Single Family</button></li>
                        <li><button className="dropdown-item">Store</button></li>
                        <li><button className="dropdown-item">Double</button></li>
                      </ul>
                    }
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="grid-view">
                  <div className="row property-cards property-filter-container" id="property-grid-container">
                    {
                      properties.map(property => <SinglePropertyGrid key={property.id} property={property}/>)
                    }
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Properties