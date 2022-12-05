import React from 'react';
import Properties from '../../components/properties/Properties';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Filter from '../../components/shared/Filter';

const Property = () => {
  return (
    <>
      <Breadcrumb
      data={[]}
      activePage="Property"
      />
      <section className='property-page'>
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <div class="title text-center">
                <h2>The latest properties available</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Filter/>
            </div>
          </div>
        </div>
        <Properties/>
      </section>
    </>
  )
}

export default Property