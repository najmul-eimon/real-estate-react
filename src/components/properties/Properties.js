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
import { changeView } from '../../utility/utility';
import '../../assets/css/properties.css';

const Properties = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterProperties, setFilterProperties] = useState(properties);
  const categories = ['all', 'appartment', 'land', 'house', 'villa', 'luxury home', 'office', 'single family'];
  const {activeBtn, setActiveBtn, getCategory, setGetCategory, getCity, mainFilter} = useContext(SaveToLocalContext);

  // switch to grid view from list view in mobile screen
  useEffect(() => {
    changeView();
  }, []);


  // set error message for search property
  let errorMsg = "";
  if(mainFilter !== null){
    if(mainFilter.length === 0){
      errorMsg = "No Property found."
    }
    else{
      errorMsg = "";
    }
  };
  

  // category wise filtering
  const filteredProperties = (category) => {
    if(mainFilter !== null){
      return mainFilter.filter(item => item.category === category);   
    }
    else{
      return properties.filter(item => getCity === null ? item.category === category.toLowerCase() : item.category === category.toLowerCase() && item.city === getCity);
    }
  }

  // city wise filtering
  const filteredCity = (city) => properties.filter(item => item.city === city.toLowerCase());

  
  // filter properties
  const filterProperty = category => {
    setGetCategory(category.toLowerCase());
    setShowDropdown(false);
    setActiveBtn(category.toLowerCase());
    
    if(category.toLowerCase() === 'all'){
      setFilterProperties(mainFilter === null ? getCity === null ? properties : filteredCity(getCity) : mainFilter);
      return;
    }
    
    setFilterProperties(filteredProperties(getCategory));
  }

  
  // initial data load
  useEffect(() => {
    setFilterProperties(mainFilter === null ? getCity === null ? properties : filteredCity(getCity) : mainFilter);
    
    // filter by click on nav link
    if(properties.findIndex(obj => obj.category === getCategory) !== -1){
      setFilterProperties(filteredProperties(getCategory));
      setActiveBtn(getCategory);
    }    
    
  }, [getCategory, mainFilter, getCity]);
  

  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterProperties?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterProperties?.length / itemsPerPage);
  
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
              defaultActiveKey="grid"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {/* tab for list view */}
              <Tab eventKey="list" title={<FaRegListAlt className='view-icon'/>}>
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
                      <button onClick={() => setShowDropdown(!showDropdown)} onBlur={() => setShowDropdown(false)}>More
                      {
                        showDropdown && (
                        <ul className='filter-dropdown'>
                          {
                            categories.slice(5).map((category, index) => 
                            <li key={index}>
                              <span className={activeBtn === category ? "active" : ""} onClick={() => filterProperty(category)}>{category}</span>
                            </li>
                            )
                          }
                        </ul>
                      )}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <p className='error-msg'>{errorMsg !== "" ? errorMsg : ""}</p>
                  <ul className="list-view" id="property-list-container">
                    {
                      currentItems?.map(property => <SinglePropertyList key={property.id} property={property}/>)
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
              <Tab eventKey="grid" title={<BsGrid className='view-icon'/>}>
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
                      <button onClick={() => setShowDropdown(!showDropdown)} onBlur={() => setShowDropdown(false)}>More
                      {
                        showDropdown && (
                        <ul className='filter-dropdown'>
                          {
                            categories.slice(5).map((category, index) => 
                            <li key={index}>
                              <span className={activeBtn === category ? "active" : ""} onClick={() => filterProperty(category)}>{category}</span>
                            </li>
                            )
                          }
                        </ul>
                      )}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="grid-view">
                    <p className='error-msg'>{errorMsg !== "" ? errorMsg : ""}</p>
                    <div className="row property-cards property-filter-container" id="property-grid-container">
                      {
                        currentItems?.map(property => <SinglePropertyGrid key={property.id} property={property}/>)
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