import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import icon1 from '../../assets/images/svg/complete.svg';
import icon2 from '../../assets/images/svg/sale.svg';
import icon3 from '../../assets/images/svg/rent.svg';
import icon4 from '../../assets/images/svg/client.svg';
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
            <div className="all-achievement" id="counter">
              <div className="single text-center">
                <div className="icon">
                  <img src={icon1} alt=""/>
                </div>
                <CountUp end={2050} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h3><span ref={countUpRef} />+</h3>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Completed Property</p>
              </div>
              <div className="single text-center">
                <div className="icon">
                  <img src={icon2} alt=""/>
                </div>
                <CountUp end={760} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h3><span ref={countUpRef} />+</h3>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Property Sales</p>
              </div>
              <div className="single text-center">
                <div className="icon">
                  <img src={icon3} alt=""/>
                </div>
                <CountUp end={1230} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h3><span ref={countUpRef} />+</h3>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Apartment Rent</p>
              </div>
              <div className="single text-center">
                <div className="icon">
                  <img src={icon4} alt=""/>
                </div>
                <CountUp end={1520} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h3><span ref={countUpRef} />+</h3>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement