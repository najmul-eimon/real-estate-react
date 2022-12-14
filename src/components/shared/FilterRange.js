import React from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import "../../assets/css/filter-option.css";

const FilterRange = ({data, minValue, maxValue, handleInput, name, dataClass}) => {
  return (
    <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6"}>
      <h4>{name}</h4>
      <MultiRangeSlider className={dataClass} min={0} max={10000} step={100} minValue={minValue} maxValue={maxValue} ruler={false} label={false}
          onInput={(e) => {
            handleInput(e);
          }}
        />
        <div className="range-value">
          <p>{dataClass === "price-range" && "$"}{minValue}</p>
          <p>to</p>
          <p>{dataClass === "price-range" && "$"}{maxValue}</p>
        </div>
    </div>
  )
}

export default FilterRange