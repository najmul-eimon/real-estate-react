import React, { useState, useEffect, useContext } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {BsGrid} from 'react-icons/bs';
import {FaRegListAlt} from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import SinglePropertyList from './SinglePropertyList';
import SinglePropertyGrid from './SinglePropertyGrid';
import {properties} from '../../data/property';
import { SaveToLocalContext } from '../layout/Layout';
import '../../assets/css/properties.css';

const Properties = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeBtn, setActiveBtn] = useState('all');
  const [filterProperties, setFilterProperties] = useState(properties);
  const categories = ['all', 'appartment', 'land', 'house', 'villa', 'luxuary home', 'office', 'single family', 'duplex'];
  
  
  // get data from context
  const {getCategory, setGetCategory, getCity} = useContext(SaveToLocalContext);
  

  // category wise filtering
  const filteredProperties = (category) => properties.filter(item => getCity === null ? item.category === category : item.category === category && item.city === getCity);


  // city wise filtering
  const filteredCity = (city) => properties.filter(item => item.city === city);
  

  // filter by click on nav link
  useEffect(() => {
    if(properties.findIndex(obj => obj.category === getCategory) !== -1){
      setFilterProperties(filteredProperties(getCategory));
      setActiveBtn(getCategory);
    }
    if(getCity){
      setFilterProperties(getCity === null ? properties : filteredCity(getCity));
    }
  }, [getCategory]);


  // filter properties
  const filterProperty = category => {
    setGetCategory(category);
    setShowDropdown(false);
    setActiveBtn(category);
    
    if(category === 'all'){
      setFilterProperties(getCity === null ? properties : filteredCity(getCity));
      return;
    }
    setFilterProperties(filteredProperties(getCategory));
  }
  

  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterProperties.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterProperties.length / itemsPerPage);
  
  // pagination page click
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterProperties.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="all-properties">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {/* tab for list view */}
              <Tab eventKey="home" title={<FaRegListAlt className='view-icon'/>}>
                <div className="col-md-12">
                  <ul className="d-flex align-items-center filter-btn-list">
                    {
                      categories.slice(0, 5).map((category, index) => 
                      <li key={index}>
                        <button type="button" className={activeBtn === category ? "active" : ""} onClick={() => filterProperty(category)}>{category}</button>
                      </li>
                      )
                    }
                    <li className='position-relative'>
                      <button onClick={() => setShowDropdown(!showDropdown)}>More</button>
                      {
                        showDropdown && (
                        <ul className='filter-dropdown'>
                          {
                            categories.slice(5).map((category, index) => 
                            <li key={index}>
                              <button type="button" className={activeBtn === category ? "active" : ""} onClick={() => filterProperty(category)}>{category}</button>
                            </li>
                            )
                          }
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <ul className="list-view" id="property-list-container">
                    {
                      currentItems.map(property => <SinglePropertyList key={property.id} property={property}/>)
                    }
                  </ul>
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    className="paginate"
                  />
                </div>
              </Tab>

              {/* tab for grid view */}
              <Tab eventKey="profile" title={<BsGrid className='view-icon'/>}>
                <div className="col-md-12">
                  <ul className="d-flex align-items-center filter-btn-list">
                    {
                      categories.slice(0, 5).map((category, index) => 
                      <li key={index}>
                        <button type="button" className={activeBtn === category ? "active" : ""} onClick={() => filterProperty(category)}>{category}</button>
                      </li>
                      )
                    }
                    <li className='position-relative'>
                      <button onClick={() => setShowDropdown(!showDropdown)}>More</button>
                      {
                        showDropdown && (
                        <ul className='filter-dropdown'>
                          {
                            categories.slice(5).map((category, index) => 
                            <li key={index}>
                              <button type="button" className={activeBtn === category ? "active" : ""} onClick={() => filterProperty(category)}>{category}</button>
                            </li>
                            )
                          }
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="grid-view">
                    <div className="row property-cards property-filter-container" id="property-grid-container">
                      {
                        currentItems.map(property => <SinglePropertyGrid key={property.id} property={property}/>)
                      }
                    </div>
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=""
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={3}
                      pageCount={pageCount}
                      previousLabel=""
                      renderOnZeroPageCount={null}
                      className="paginate"
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties