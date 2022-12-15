import { useState, useEffect } from 'react';
import { properties } from '../../data/property';
import { changeView } from '../../utility/utility';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaRegListAlt } from 'react-icons/fa';
import SinglePropertyList from '../properties/SinglePropertyList';
import { BsGrid } from 'react-icons/bs';
import SinglePropertyGrid from '../properties/SinglePropertyGrid';
import ReactPaginate from 'react-paginate';

const AllProperty = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeBtn, setActiveBtn] = useState('all');
  const [filterProperties, setFilterProperties] = useState(properties);
  const categories = ['all', 'appartment', 'land', 'house', 'villa', 'luxury home', 'office', 'single family'];

  // switch to grid view from list view in mobile screen
  useEffect(() => {
    changeView();
  }, []);
  
  // filter properties
  const filterProperty = category => {
    setShowDropdown(false);
    setActiveBtn(category);
    
    if(category === 'all'){
      setFilterProperties(properties);
      return;
    }
    setFilterProperties(properties.filter(item => item.category === category));
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
    <section className="properties">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>The latest properties available</h2>
            </div>
          </div>
        </div>
      </div>
      {/* all properties */}
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
    </section>
  )
}

export default AllProperty