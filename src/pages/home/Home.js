import React, { useEffect } from 'react'
import Contact from '../../components/contact/Contact';
import Banner from '../../components/home/Banner'
import Place from '../../components/home/Place';
import Properties from '../../components/properties/Properties';
import Achievement from '../../components/shared/Achievement';
import Partner from '../../components/shared/Partner';

const Home = () => {
  useEffect(() => {
    document.title = 'Real Estate | Home';
  }, []);
  
  return (
    <>
      <Banner/>
      <Achievement/>
      <Properties/>
      <Place/>
      <Contact/>
      <Partner/>
    </>
  )
}

export default Home