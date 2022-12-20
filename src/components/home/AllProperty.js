import { useState, useEffect } from 'react';
import { properties } from '../../data/property';
import { changeView } from '../../utility/utility';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaRegListAlt } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import PropertyList from '../shared/PropertyList';
import PropertyGrid from '../shared/PropertyGrid';

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
                  <PropertyList categories={categories} pageCount={pageCount} handlePageClick={handlePageClick} activeBtn={activeBtn} setShowDropdown={setShowDropdown} showDropdown={showDropdown} filterProperty={filterProperty} currentItems={currentItems}/>
                </Tab>

                {/* tab for grid view */}
                <Tab eventKey="grid" title={<BsGrid className='view-icon'/>}>
                  <PropertyGrid categories={categories} pageCount={pageCount} handlePageClick={handlePageClick} activeBtn={activeBtn} setShowDropdown={setShowDropdown} showDropdown={showDropdown} filterProperty={filterProperty} currentItems={currentItems}/>
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