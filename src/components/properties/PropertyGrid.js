import ReactPaginate from 'react-paginate';
import SinglePropertyGrid from './SinglePropertyGrid';

const PropertyGrid = ({activeBtn, errorMsg, pageCount, handlePageClick, categories, setShowDropdown, showDropdown, filterProperty, currentItems}) => {
  return (
    <>
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
    </>
  )
}

export default PropertyGrid