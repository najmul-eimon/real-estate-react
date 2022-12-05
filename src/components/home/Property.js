import React from 'react';
import Properties from '../properties/Properties';

const Property = () => {
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
      <Properties/>
    </section>
  )
}

export default Property