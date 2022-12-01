import React, { useEffect } from 'react'
import Banner from '../../components/home/Banner'
import Place from '../../components/home/Place';
import Achievement from '../../components/shared/Achievement';

const Home = () => {
  useEffect(() => {
    document.title = 'Real Estate | Home';
  }, []);
  
  return (
    <>
      <Banner/>
      <Achievement/>
      <Place/>
    </>
  )
}

export default Home