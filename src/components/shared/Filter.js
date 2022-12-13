import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {BsSliders} from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi';
import { SaveToLocalContext } from "../layout/Layout";
import {properties} from '../../data/property';
import FilterDropdown from "./FilterDropdown";
import FilterRange from "./FilterRange";
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
  const [category, setCategory] = useState("Select Category");
  const [status, setStatus] = useState("Select Status");
  const [city, setCity] = useState("Select City");
  const [room, setRoom] = useState("Select Room");
  const [feature, setFeature] = useState("Select Feature");

  const [minPriceValue, setMinPriceValue] = useState(1000);
  const [maxPriceValue, setMaxPriceValue] = useState(8000);

  const [minAreaValue, setMinAreaValue] = useState(1000);
  const [maxAreaValue, setMaxAreaValue] = useState(8000);

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const locations = ["garden city", "jamestown", "Daly City", "Oakland", "Alexandria", "New Orleans", "Northfield", "Saint Cloud", "Jersey City", "Atlantic City", "Ellensburg", "Olympia"];
  const types = ["Single House", "Town house", "Multi Family House"];
  const categories = ["appartment", "land", "house", "villa", "luxuary home", "office", "single family", "duplex"];
  const allStatus = ["Rent", "Sale"];
  const cities = ["New york", "California", "Louisiana", "Minnesota", "New Jersey", "Washington"];
  const rooms = ["Single Room", "Double Room", "Many Room"];
  const features = ["Duplex", "Delux", "Adjoining", "Suite"];

  const handlePriceInput = (e) => {
    setMinPriceValue(e.minValue);
    setMaxPriceValue(e.maxValue);
  };

  const handleAreaInput = (e) => {
    setMinAreaValue(e.minValue);
    setMaxAreaValue(e.maxValue);
  };
  
  const {setActiveBtn, setGetCategory, setMainFilter, resetFilter, setResetFilter} = useContext(SaveToLocalContext);
  let obj = {};
  let filteredArr = [];

  useEffect(() => {
    if(resetFilter){
      setLocation("Select Location");
      setType("Property Type");
      setCategory("Select Category");
      setStatus("Select Status");
      setCity("Select City");
      setRoom("Select Room");
      setFeature("Select Feature");
      setResetFilter(false);
    }
  }, [resetFilter,setResetFilter]);
  
  const handleSearchProperty = () => {
    if(location !== "Select Location"){
      obj.location = location;
    }
    if(type !== "Property Type"){
      obj.type = type;
    }
    if(category !== "Select Category"){
      obj.category = category;
    }
    if(status !== "Select Status"){
      obj.status = status;
    }
    if(city !== "Select City"){
      obj.city = city;
    }
    if(room !== "Select Room"){
      obj.room = room;
    }
    if(feature !== "Select Feature"){
      obj.feature = feature;
    }

    let keys = Object.keys(obj);
    for(let element of properties){
      let num = 0;
      for(let key of keys){
        if(obj[key].toLowerCase() === element[key]){
          num++;
        }
        else{
          num--;
        }
      }
      if((num === keys.length) && (element.price <= maxPriceValue && element.price >= minPriceValue) && (element.space <= maxAreaValue && element.space >= minAreaValue)){
        filteredArr.push(element);
      }
    }
    setMainFilter(filteredArr);
    setGetCategory('all');
    setActiveBtn('all');
  }  

  return (
    <div className="filter-main">
      <div className="filter-content top-content">
        <div className="row filter-row align-items-center">

          {/* location */}
          <FilterDropdown data={data} showDropdown={showLocation} setShowDropdown={setShowLocation} selectData={location} setSelectData={setLocation} dataArray={locations} name={"Location"}/>

          {/* type */}
          <FilterDropdown data={data} showDropdown={showTypes} setShowDropdown={setShowTypes} selectData={type} setSelectData={setType} dataArray={types} name={"Type"}/>

          {/* category */}
          <FilterDropdown data={data} showDropdown={showCategory} setShowDropdown={setShowCategory} selectData={category} setSelectData={setCategory} dataArray={categories} name={"Category"}/>

          {/* filter and search button */}
          <div className={data === "sidebar" ? "col-sm-12 order-1" : "col-sm-6 col-lg-3 order-1 order-sm-0"}>
            <div className="filter-buttons d-flex align-items-center">
              <button type="button" id="moreFilters" className="filter" onClick={() => setShowMoreFilters(!showMoreFilters)}>
                Filter <BsSliders className="filter-icon"/>
              </button>
              <Link to="/property" className="search btn-style" onClick={handleSearchProperty}>
                Search <FiSearch className={data === "sidebar" ? "search-icon" : "search-icon d-none"}/>
              </Link>
            </div>
          </div>

          <div className="col-sm-12 mt-0">
            <div className={showMoreFilters ? 'bottom-content show':'bottom-content'}>
              <div className="row filter-row">

                {/* status */}
                <FilterDropdown data={data} showDropdown={showStatus} setShowDropdown={setShowStatus} selectData={status} setSelectData={setStatus} dataArray={allStatus} name={"Status"}/>

                {/* city */}
                <FilterDropdown data={data} showDropdown={showCity} setShowDropdown={setShowCity} selectData={city} setSelectData={setCity} dataArray={cities} name={"City"}/>

                {/* room */}
                <FilterDropdown data={data} showDropdown={showRoom} setShowDropdown={setShowRoom} selectData={room} setSelectData={setRoom} dataArray={rooms} name={"Room"}/>

                {/* feature */}
                <FilterDropdown data={data} showDropdown={showFeature} setShowDropdown={setShowFeature} selectData={feature} setSelectData={setFeature} dataArray={features} name={"Feature"}/>

                {/* price range */}
                <FilterRange data={data} minValue={minPriceValue} maxValue={maxPriceValue} handleInput={handlePriceInput} name={"Price Range"} dataClass={"price-range"}/>

                {/* area range */}
                <FilterRange data={data} minValue={minAreaValue} maxValue={maxAreaValue} handleInput={handleAreaInput} name={"Area Range"} dataClass={"area-range"}/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
