import React, { useEffect } from 'react'
import Banner from '../../components/home/Banner'

const Home = () => {
  useEffect(() => {
    document.title = 'Real Estate | Home';
  }, []);
  
  return (
    <>
      <Banner/>
    </>
  )
}

export default Home