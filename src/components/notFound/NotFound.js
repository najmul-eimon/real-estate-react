import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import image from '../../assets/images/not-found1.png';
import { SaveToLocalContext } from '../layout/Layout';
import '../../assets/css/not-found.css';

const NotFound = () => {
  // const {setShowFooter} = useContext(SaveToLocalContext);

  // useEffect(() => {
  //   setShowFooter(false)
  // },[setShowFooter]);

  return (
    <>
      <Navbar/>
      <main>
        <section className='not-found'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img src={image} alt="" />
                <div className="d-flex align-items-center justify-content-center">
                  <Link type='button' to="/">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NotFound