import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { achievements } from '../../data/achievement';
import '../../assets/css/achievment.css';

const Achievement = () => {
  return (
    <section className="achievement">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Achievement</h2>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="all-achievement">
              {
                achievements.map(({id, icon, counter, title}) => 
                  <div key={id} className="single text-center">
                    <div className="icon">
                      <img src={icon} alt=""/>
                    </div>
                    <CountUp end={counter} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <h3><span ref={countUpRef} />+</h3>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <p>{title}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement