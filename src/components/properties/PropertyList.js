import ReactPaginate from 'react-paginate';
import SinglePropertyList from './SinglePropertyList';

const PropertyList = ({activeBtn, errorMsg, pageCount, handlePageClick, categories, setShowDropdown, showDropdown, filterProperty, currentItems}) => {
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
    </>
  )
}

export default PropertyList