import React from 'react';
import {BsChevronDown} from 'react-icons/bs';
import "../../assets/css/filter-option.css";

const FilterDropdown = ({data, showDropdown, setShowDropdown, selectData, setSelectData, dataArray, name}) => {

  return (
    <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6 col-lg-3"}>
      <div className="custom-select">
        <h4>{name}</h4>
        <button
          type="button"
          className="select-btn"
          onBlur={() => setShowDropdown(false)}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="btn-main">
            {selectData}
            <span className={showDropdown ? 'rotate' : ''}>
              <BsChevronDown className="arrow-icon" />
            </span>
          </div>
          {showDropdown && (
            <div className="btn-dropdown">
              {dataArray.map((value, index) => (
                <p onClick={() => {
                    setSelectData(value);
                    setShowDropdown(!selectData);
                  }}
                  key={index}
                >
                  {value}
                </p>
              ))}
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default FilterDropdown